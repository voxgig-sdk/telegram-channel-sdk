# TelegramChannel SDK exists test

require "minitest/autorun"
require_relative "../TelegramChannel_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TelegramChannelSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
