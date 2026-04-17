repo_root = File.expand_path('../../../..', __dir__)
www_root = File.join(repo_root, 'apps/www')
root_bin = File.join(repo_root, 'node_modules', '.bin')

def run_with_root_node_bins(command, root_bin, www_root)
  sh %(cd "#{www_root}" && PATH="#{root_bin}:$PATH" #{command})
end

if Rake::Task.task_defined?('css:build')
  Rake::Task['css:build'].clear
end

task 'css:build' do
  run_with_root_node_bins('tailwindcss --postcss -i ./app/assets/stylesheets/application.tailwind.css -o ./app/assets/builds/application.css', root_bin, www_root)
end

if Rake::Task.task_defined?('javascript:build')
  Rake::Task['javascript:build'].clear
end

task 'javascript:build' do
  run_with_root_node_bins('esbuild app/javascript/application.js --bundle --keep-names --sourcemap --minify --outdir=app/assets/builds', root_bin, www_root)
  run_with_root_node_bins('esbuild app/assets/javascripts/serviceworker.js --bundle --sourcemap --minify --outdir=app/assets/builds', root_bin, www_root)
end
