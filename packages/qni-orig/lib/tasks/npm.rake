#!/usr/bin/env ruby

directory 'dist'

task 'npm:build' => %i[environment dist] do
  desc 'build npm package'

  Rake::Task['webpacker:compile'].invoke

  npm_packs = Dir.glob('./public/packs/js/npm-*.js').map do |each|
    [each, File::Stat.new(each).mtime]
  end
  latest_npm_pack = npm_packs.max_by { |a| a[1] }[0]

  cp latest_npm_pack, 'dist/index.js'
end

task 'npm:publish' => :environment do
  sh 'npm publish'
end
