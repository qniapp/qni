# frozen_string_literal: true

module FixtureFileHelper
  def file_text(path)
    File.read(Rails.root.join('test', 'fixtures', 'files', path)).inspect
  end
end

ActiveRecord::FixtureSet.context_class.include FixtureFileHelper
