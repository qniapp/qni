# frozen_string_literal: true

class Element
  include ActiveModel::Validations

  def self.elements
    @elements ||= {}
  end

  def self.attributes
    @attributes ||= {}
  end

  def self.attribute(name, default: nil)
    attributes[name] = { default: default }

    define_method_or_raise(name) do
      get_instance_variable(name)
    end
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def self.element(name, multiple: false, &config)
    plural_name = name.to_s.pluralize.to_sym if multiple

    elements[name] = {
      multiple: plural_name || false, class: Class.new(Element, &config)
    }

    define_method_or_raise(name) do |attributes = nil, &block|
      return get_instance_variable(multiple ? plural_name : name) unless attributes || block

      element = self.class.elements[name][:class].new(@view, attributes, &block)

      if multiple
        get_instance_variable(plural_name) << element
      else
        set_instance_variable(name, element)
      end
    end

    return if !multiple || name == plural_name

    define_method_or_raise(plural_name) do
      get_instance_variable(plural_name)
    end
  end
  # rubocop:enable Metrics/AbcSize

  # rubocop:enable Metrics/MethodLength

  def self.define_method_or_raise(method_name, &block)
    raise "Method '#{method_name}' already exists." if method_defined?(method_name.to_sym)

    define_method(method_name, &block)
  end
  private_class_method :define_method_or_raise

  def initialize(view, attributes = nil, &block)
    @view = view
    initialize_attributes(attributes || {})
    initialize_elements
    @yield = block_given? ? @view.capture(self, &block) : nil
    validate!
  end

  def content
    @yield
  end

  def content?
    content.present?
  end

  protected

  def initialize_attributes(attributes)
    self.class.attributes.each do |name, options|
      attr = attributes.key?(name) ? attributes[name] : options[:default]&.dup
      set_instance_variable(name, attr)
    end
  end

  def initialize_elements
    self.class.elements.each do |name, options|
      if (plural_name = options[:multiple])
        set_instance_variable(plural_name, [])
      else
        set_instance_variable(name, nil)
      end
    end
  end

  private

  def get_instance_variable(name)
    instance_variable_get(:"@_#{name}")
  end

  def set_instance_variable(name, value)
    instance_variable_set(:"@_#{name}", value)
  end
end
