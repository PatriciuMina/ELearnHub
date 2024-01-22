require "test_helper"

class UserMailerTest < ActionMailer::TestCase
  test "export_users" do
    mail = UserMailer.export_users
    assert_equal "Export users", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
