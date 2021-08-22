#!/usr/bin/env ruby

directory 'dist'

task 'npm:build' => %i[environment dist] do
  desc 'build npm package'

  Rake::Task['webpacker:compile'].invoke

  npm_packs = Dir.glob('./public/packs/js/npm-*.js').map do |each|
    [each, File::Stat.new(each).mtime]
  end
  latest_npm_pack = npm_packs.max_by { |a| a[1] }[0]

  js = File.read(latest_npm_pack)
  js_tmp = Tempfile.open('index.js') do |f|
    f.print js.gsub(%r{//# sourceMappingURL=.+}, '//# sourceMappingURL=index.js.map')
    f
  end

  cp js_tmp.path, 'dist/index.js'
  cp js_tmp.path, 'docs/index.js'

  latest_npm_pack_map = "#{latest_npm_pack}.map"
  cp latest_npm_pack_map, 'dist/index.js.map'
  cp latest_npm_pack_map, 'docs/index.js.map'
end

task 'npm:publish' => :environment do
  sh 'npm publish'
end
