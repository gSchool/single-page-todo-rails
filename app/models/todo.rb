class Todo < ActiveRecord::Base
  validates :content, length: {minimum: 5}
end
