// Alt text for quiz attachments, keyed by the exact attribute URL.
// Describe only what is drawn, never the answer. See docs/quiz-alt.md.
const base = 'https://qniapp.github.io/qni/images/'
const circles = '円表示: |0⟩ と |1⟩ の 2 つの円'

export const QUIZ_IMAGE_ALT = {
  // Used as question images: describe what the learner needs to read.
  [`${base}superposition-100-0.png`]:
    '円表示: |0⟩ の円は全体が塗りつぶされ、針は真上を向いている。|1⟩ の円は空',
  [`${base}superposition-0-100.png`]:
    '円表示: |0⟩ の円は空。|1⟩ の円は全体が塗りつぶされ、針は真上を向いている',
  [`${base}superposition-50-50.png`]:
    '円表示: |0⟩ と |1⟩ の円の内側に、外枠より小さい同じ大きさの塗り円がある。針はどちらも真上を向いている',
  [`${base}superposition_phase.png`]:
    '円表示: |0⟩ の円は小さな塗り円で、針は左下を向いている。|1⟩ の円はほぼ全体が塗られ、針は右上を向いている',
  [`${base}basic_quantum_circuit.png`]:
    '3 本の横線の回路図。各線の左端に |0⟩。1 本目の線上に H と書かれた箱、その右に 1 本目の黒丸と 2 本目の ⊕ を縦線で結んだ記号、さらに 2 本目の黒丸と 3 本目の ⊕ を縦線で結んだ記号',
  // Used only as answer images: the answer text carries the content.
  [`${base}superposition_phase_reversed.png`]: circles,
  [`${base}superposition-minus-state.png`]: circles,
  [`${base}superposition-50-50-phase¼π.png`]: circles,
  [`${base}h-gate-reversibility.png`]:
    '円表示の 2 段の図。各段で、左端の状態に H ゲートを 2 回続けて適用し、途中と最後の状態を矢印の先に並べている',
  [`${base}x-gate-reversibility.png`]:
    '円表示の図。左端の状態に X ゲートを 2 回続けて適用し、途中と最後の状態を矢印の先に並べている',
  [`${base}HH.png`]: 'H ゲートを 2 つ並べた回路と、それと等しい回路を等号で結んだ図',
  [`${base}HXH.png`]: 'PHASE(π) ゲートと、それと等しいゲートの並びを等号で結んだ回路図',
  [`${base}2rnots.png`]: '√X ゲートを含む回路の等式の図',
  [`${base}rnot_gate_decomposition.png`]:
    '√X ゲートと、それと等しいゲートの並びを等号で結んだ回路図',
  [`${base}X_gate_decomposition.png`]: 'X ゲートと、それと等しいゲートの並びを等号で結んだ回路図',
  [`${base}random_bit_generator_circuit.png`]: '1 量子ビットの回路図',
  [`${base}p-bit/p_bit_graph.png`]:
    '横軸を「表の出る確率」、縦軸を「裏の出る確率」とした手描きのグラフ',
  [`${base}argument_of_complex.png`]: '座標平面に点 a, b と「偏角」の文字を描いた手描きの図',
}
