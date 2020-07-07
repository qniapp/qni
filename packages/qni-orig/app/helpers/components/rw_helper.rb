module Components::RwHelper
  # Returns a partial of the qubit-write operation.
  #
  #   # Write 0
  #   write(value: 0)
  #
  #   # Add a label on top of the write (default - nil)
  #   write(value: 1, label: 'write 1')
  def write(*options)
    render 'components/rw/write', *options
  end

  # Returns a partial of the qubit-read operation.
  #
  #   # Readout 0
  #   readout(value: 0)
  #
  #   # Add a label on top of the readout (default - nil)
  #   readout(value: 1, label: 'readout 1')
  def readout(*options)
    render 'components/rw/readout', *options
  end
end
