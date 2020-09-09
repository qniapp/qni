class Navbar::CircuitNameComponent < Component
  attribute :name

  validates :name, presence: true
end
