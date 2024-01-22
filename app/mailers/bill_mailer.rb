class BillMailer < ApplicationMailer
  def send_bill(customer, price, course_name, username)
    @price = price
    @course_name = course_name
    @username = username

    mail(to: customer, subject: 'Your Bill') do |format|
      format.text do
        render plain: <<~PLAIN_TEXT
          Dear #{@username},

          Thank you for purchasing the course "#{@course_name}"! We are delighted to have you as our valued customer.

          Here are the details of your purchase:

          Course: #{@course_name}
          Price: $#{@price}

          Payment Method: Card

          If you have any questions or need further assistance regarding your purchase, please don't hesitate to contact our support team at [Insert Contact Details]. We are here to help!

          Once again, thank you for choosing our platform for your learning journey. We hope you enjoy the course and find it valuable for your personal and professional growth.

          Best regards,
          THE BOSS
          Learning Management System
        PLAIN_TEXT
      end
    end
  end
end