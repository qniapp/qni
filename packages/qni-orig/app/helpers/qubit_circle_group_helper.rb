module QubitCircleGroupHelper
  # rubocop:disable Rails/OutputSafety
  def qubit_circle_group(kets, size: kets.length / 2, &block)
    kets.in_groups_of(size, false).map do |each|
      component('qubit_circle_group', size: size) do
        if block
          block.yield each
        else
          each.map { |ket| qubit_circle ket: ket }.join.html_safe
        end
      end
    end.join.html_safe
  end
  # rubocop:enable Rails/OutputSafety
end
