repo_root = File.expand_path('../../../..', __dir__)
www_root = File.join(repo_root, 'apps/www')

def run_www_pnpm_script(script, www_root)
  sh %(cd "#{www_root}" && pnpm run #{script})
end

# cssbundling-rails 1.4.x still requires a lockfile in the current directory to
# detect pnpm, and jsbundling-rails will otherwise fall back to bun when it is
# available on PATH. Keep Rails hooked to the package.json build scripts until
# upstream task detection works for qni's root-lockfile workspace layout.
if Rake::Task.task_defined?('css:build')
  Rake::Task['css:build'].clear
end

task 'css:build' do
  run_www_pnpm_script('build:css', www_root)
end

if Rake::Task.task_defined?('javascript:build')
  Rake::Task['javascript:build'].clear
end

task 'javascript:build' do
  run_www_pnpm_script('build:js', www_root)
end
