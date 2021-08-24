#!/usr/bin/env ruby

directory 'dist'

task 'npm:build' => %i[environment dist] do
  desc 'build npm package'

  Rake::Task['webpacker:compile'].invoke

  cp 'public/packs/npm.js', 'dist/index.js'
  cp 'public/packs/npm.js', 'docs/index.js'
end

task 'npm:publish' => :environment do
  sh 'npm publish'
end
