module ApplicationHelper
  include BetterHtml::Helpers

  def javascript_pack
    path = "#{controller_path}/#{action_name}.js"

    return 'application.js' unless javascript_file_exist?(path)

    path
  end

  def javascript_file_exist?(path)
    manifest = File.open('public/packs/manifest.json') do |file|
      JSON.load(file) # rubocop:disable Security/JSONLoad
    end
    manifest.key?(path)
  end
end
