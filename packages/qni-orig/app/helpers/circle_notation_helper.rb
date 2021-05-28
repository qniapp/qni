module CircleNotationHelper
  def circle_notation(nqubit:)
    kets = (0..2**Qni::MAX_NQUBIT - 1).to_a

    component 'circle_notation', nqubit: nqubit do
      state_vector do
        qubit_circle_group(kets, size: 64) do |qc64|
          qubit_circle_group(qc64) do |qc32|
            qubit_circle_group(qc32) do |qc16|
              qubit_circle_group qc16
            end
          end
        end
      end
    end
  end
end
