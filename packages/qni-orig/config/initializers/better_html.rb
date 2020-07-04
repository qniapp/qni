BetterHtml.configure do |config|
  config.partial_tag_name_pattern = /\A[a-zA-Z0-9\-\:]+\z/
  config.template_exclusion_filter = proc { |filename| /administrate/=~ filename }
end
