class Micropost < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  validates :user_id, presence: true
  validates :content, presence: true, length: {
    maximum: Settings.validates.microposts.content_max_length
  }

  validates :image, content_type: {in: Settings.micropost.image_type,
                                   message: :wrong_format},
                                  size: {less_than:
                                    Settings.micropost.image_size.megabytes,
                                         message: :too_big}

  scope :latest, ->{order(created_at: :desc)}

  delegate :name, to: :user, prefix: true

  def display_image
    image.variant(resize: Settings.micropost.image_resize)
  end
end
