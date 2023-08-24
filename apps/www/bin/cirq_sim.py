#!/usr/bin/env python

import sys
import json
import random
import logging
import maho

logger = logging.Logger("mylogger")
handler = logging.FileHandler("/tmp/qni_cirq.log")
fmt = logging.Formatter('%(asctime)s - %(message)s')
handler.setFormatter(fmt)
logger.addHandler(handler)
logger.setLevel(10)

# stdin に渡された Qni の量子回路 JSON をパースし、
# 量子回路の各ステップの実行結果の配列を stdout に JSON として出力
#
# Qni から渡される JSON の例:
#   {"circuit_id":"{\"cols\":[[\"H\"]]}","qubit_count":1,"step_index":0,"steps":[[{"type":"H","targets":[0]}],[],[],[],[]],"targets":[0,1]}
#
# JSON のプロパティの意味:
#   - circuit_id: 回路を一意に表す ID 文字列
#   - qubit_count: 回路の量子ビット数
#   - step_index: Qni で実行結果を表示しているステップ番号
#   - steps: 回路の各ステップの配列


# stdin に渡された Qni の量子回路 JSON をパース

json_str = ""

for line in sys.stdin:
    json_str += line

json_dict = json.loads(json_str)



# JSON の各プロパティを (とりあえず) 変数に入れとく

circuit_id = json_dict["circuit_id"]
qubit_count = json_dict["qubit_count"]
step_index = json_dict["step_index"]
steps = json_dict["steps"]
targets = json_dict["targets"]


logger.debug(circuit_id)
logger.debug(qubit_count)
logger.debug(step_index)
logger.debug(steps)
logger.debug(targets)
logger.debug("\n")

# 各ステップの実行結果 (振幅) を step_results に入れる
# ここでは適当な乱数を入れるだけ

def execute_step(step, index):
    amplitudes = {}

    if index == step_index:
        for _i, each in enumerate(targets):
            # 実部がランダム、虚部がゼロの複素数ひとつをセット
            amplitudes[each] = [random.random(), 0]

    return amplitudes

def test():
    step_results = []

    for index, each in enumerate(steps):
        step_results.append({ 'amplitudes': execute_step(each, index) })


    # 実行結果を stdout へ
    #
    # 実際には次のような JSON を返す
    #    [{"amplitudes": {"0": [0.485132564835021, 0], "1": [0.5424376215990726, 0]}}, {"amplitudes": {}}, {"amplitudes": {}}, {"amplitudes": {}}, {"amplitudes": {}}]

    print(json.dumps(step_results))


def maho_call(qubit_count, step_index, steps):
    br = maho.cirqbridge(logger)
    circuit, measurement_moment = br.build_circuit(qubit_count, steps)

    for each in str(circuit).split("\n"):
        logger.debug(each)

    result_list = br.run_circuit_until_step_index(circuit, measurement_moment, step_index, steps)
    logger.debug(result_list)

    # [complex ...] => {0: [real,img] ..}
    def convert_amp(amp):
        res = {}
        for i in range(amp.size):
            res[i] = [float(amp[i].real), float(amp[i].imag)]
        return res

    def convert_item(item):
        if ":amplitude" in item:
            return {"amplitudes": convert_amp(item[":amplitude"])}
        return {}

    return [convert_item(item) for item in result_list]

step_results = maho_call(qubit_count, step_index, steps)
logger.debug(step_results)
print(json.dumps(step_results))
