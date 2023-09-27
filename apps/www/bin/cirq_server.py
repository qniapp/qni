#!/usr/bin/env python
import sys
import json
import random
import logging
import maho

"""
curl -X POST -H 'Content-type: application/json' --data @test.json http://localhost:3001/cirq
"""

logger = logging.Logger("mylogger")
#handler = logging.FileHandler("/tmp/qni_cirq.log")
handler = logging.StreamHandler()
fmt = logging.Formatter('%(asctime)s - %(message)s')
handler.setFormatter(fmt)
logger.addHandler(handler)
logger.setLevel(10)


from http.server import BaseHTTPRequestHandler, HTTPServer
import logging
import json

class S(BaseHTTPRequestHandler):
    def _set_response(self, code, content):
        self.send_response(code)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(content).encode('utf-8'))

    def do_GET(self):
        self.send_response(405, "GET is not allowed")

    def do_POST(self):
        logging.debug(self.path)
        if self.path != '/cirq':
            self._set_response(404, "Not Found")
            return
        content_type = self.headers['Content-Type']
        if content_type != 'application/json':
            self._set_response(400, "Content-Type must be application/json")
            return
        content_length = int(self.headers['Content-Length']) 
        post_data = self.rfile.read(content_length) 
        req = json.loads(post_data.decode('utf-8'))
        logging.debug(req)
        try:
            reply = json_process(req)
        except Exception as e:
            logging.exception(e)
            self._set_response(500, "Internal Server Error", e.message)
            return
        self._set_response(200, reply)


def maho_call(qubit_count, step_index, steps):
    br = maho.cirqbridge(logger)
    circuit, measurement_moment = br.build_circuit(qubit_count, steps)
    logger.debug(str(circuit))
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

def insert_ident(steps, qubit_count):
    tmp_d = {'type': '…', 'targets': list(range(qubit_count))}
    steps.insert(1, [tmp_d])
    return steps

def reverse_targets(steps, qubit_count):
    def reverse_one(l):
        return [qubit_count-1-i for i in l]
    def reverse_one_dict(d):
        d2 = d.copy()
        d2['targets'] = reverse_one(d['targets'])
        return d2
    return [[reverse_one_dict(d) for d in step] for step in steps]


def json_process(json_dict):
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

    steps = insert_ident(steps, qubit_count)
    steps = reverse_targets(steps, qubit_count)
    logger.debug(steps)

    step_results = maho_call(qubit_count, step_index, steps)
    logger.debug(step_results)
    return step_results

def run(handler_factory, port=3001):
    logging.basicConfig(level=logging.DEBUG)
    server_address = ('', port)
    httpd = HTTPServer(server_address, handler_factory)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')

if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(S, port=int(argv[1]))
    else:
        run(S)