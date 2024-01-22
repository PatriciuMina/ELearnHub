class User < ApplicationRecord
  belongs_to :school
  has_many :courses
  has_many :enrollments
  has_many :answears
  has_many :user_answears
  has_many :messages
  has_many :bills
  has_many :groups
  has_many :meetings
  has_many :meeting_invitations
  has_many :parent_relations
  self.per_page = 7
  #scope :all_except, ->(user) {where.not(id: user)}
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  def self.from_omniauth(auth)
    puts "Calling self.from_omniauth with auth: #{auth.inspect}"
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.full_name = auth.info.name # assuming the user model has a name
      user.avatar_url = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails,
      # uncomment the line below to skip the confirmation emails.
      #user.skip_confirmation!
      #user.username = auth.info.email
      #user.name = auth.info.email
      #user.domain = "utcn"
      #user.id_school = 1
      #user.save(:validate => false)
    end
  end


  after_initialize :set_default_student, :if => :new_record?
  def set_default_student
    self.role ||= "student"
  end

  after_create do
    customer = Stripe::Customer.create(email: email)
    update(stripe_customer_id: customer.id)
  end

  private

  # def from_google_params
  #   @from_google_params ||= {
  #     uid: auth.uid,
  #     email: auth.info.email,
  #     full_name: auth.info.name,
  #     avatar_url: auth.info.image
  #   }
  # end

  def auth
    @auth ||= request.env['omniauth.auth']
  end

end
