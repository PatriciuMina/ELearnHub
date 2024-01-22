class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.export_users.subject
  #
  def export_users(email, csv_data)
    attachments['users.csv'] = { content: csv_data, content_type: 'text/csv' }
    mail(to: email, subject: 'Exported Users')
  end
end
