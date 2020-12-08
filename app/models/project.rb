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
class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy

  validates :name, length: { minimum: 1, maximum: 255 }
  validates :url, length: { minimum: 1, maximum: 255 }, uniqueness: { case_sensitive: false },
                  format: { with: /\A[a-z0-9_-]+\z/ }
end
