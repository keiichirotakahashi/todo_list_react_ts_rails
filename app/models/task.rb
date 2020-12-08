# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  due_on     :date             not null
#  name       :string(255)      not null
#  status     :integer          default("todo"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :bigint           not null
#
# Indexes
#
#  index_tasks_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#
class Task < ApplicationRecord
  belongs_to :project
  has_one :user, through: :project

  validates :name, length: { minimum: 1, maximum: 255 }
  validates :due_on, presence: true
  validates :status, inclusion: { in: Task.statuses.keys }

  enum status: { todo: 1, doing: 2, done: 3 }
end
