# frozen_string_literal: true

require 'test_helper'
require 'bundler'

class JbuilderRemovalTest < ActionDispatch::IntegrationTest
  test 'www no longer declares jbuilder or ships jbuilder templates' do
    gemfile = Rails.root.join('Gemfile').read

    assert_no_match(
      /^\s*gem\s*\(?\s*["']jbuilder["'](?:\s*,|\s*\)|\s*$)/,
      gemfile,
      'Expected Gemfile to stop declaring jbuilder'
    )

    assert_not_includes(
      gemfile_lock_dependency_names,
      'jbuilder',
      'Expected Gemfile.lock DEPENDENCIES to stop listing jbuilder'
    )

    assert_empty(
      Dir.glob(Rails.root.join('app/views/**/*.jbuilder').to_s),
      'Expected app/views to contain no Jbuilder templates'
    )
  end

  test 'circuit page still renders without jbuilder' do
    with_stubbed_layout_asset_tags do
      get circuit_path(json: '{"cols":["H"]}')
    end

    assert_response :success
    assert_select 'quantum-simulator'
  end

  test 'circuit svg page still renders without jbuilder' do
    with_stubbed_layout_asset_tags do
      get circuit_svg_path(json: '{"cols":["H"]}')
    end

    assert_response :success
    assert_select 'quantum-circuit'
  end

  private

  def gemfile_lock_dependency_names
    lockfile = Rails.root.join('Gemfile.lock').read

    Bundler::LockfileParser.new(lockfile).dependencies.keys
  end

  def with_stubbed_layout_asset_tags
    ActionView::Base.class_eval do
      alias_method :__jbuilder_removal_test_original_javascript_include_tag, :javascript_include_tag
      alias_method :__jbuilder_removal_test_original_stylesheet_link_tag, :stylesheet_link_tag

      def javascript_include_tag(...)
        '<script src="/assets/application.js"></script>'.html_safe
      end

      def stylesheet_link_tag(...)
        '<link rel="stylesheet" href="/assets/application.css" />'.html_safe
      end
    end

    yield
  ensure
    ActionView::Base.class_eval do
      alias_method :javascript_include_tag, :__jbuilder_removal_test_original_javascript_include_tag
      alias_method :stylesheet_link_tag, :__jbuilder_removal_test_original_stylesheet_link_tag
      remove_method :__jbuilder_removal_test_original_javascript_include_tag
      remove_method :__jbuilder_removal_test_original_stylesheet_link_tag
    end
  end
end
