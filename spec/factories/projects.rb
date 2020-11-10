# == Schema Information
#
# Table name: projects
#
#  id         :bigint           not null, primary key
#  name       :string(255)      default(""), not null
#  url        :string(255)      default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_projects_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :project do
    association :user
    name { 'プロジェクト' }
    sequence(:url) { |n| "project#{n}" }
  end
end
