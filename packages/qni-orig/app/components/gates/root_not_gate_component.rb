require 'component'
require 'concerns/connectable'
require 'concerns/wireable'

class Gates::RootNotGateComponent < Component
  include Connectable
  include Wireable

  def klass
    class_string('instruction', 'gate', 'root-not-gate',
                 'instruction--wire-inactive' => !wire_active?)
  end
end
