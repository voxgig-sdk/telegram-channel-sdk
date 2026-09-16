# TelegramChannel SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TelegramChannelFeatures
  def self.make_feature(name)
    case name
    when "base"
      TelegramChannelBaseFeature.new
    when "ratelimit"
      TelegramChannelRatelimitFeature.new
    when "retry"
      TelegramChannelRetryFeature.new
    when "test"
      TelegramChannelTestFeature.new
    when "timeout"
      TelegramChannelTimeoutFeature.new
    else
      TelegramChannelBaseFeature.new
    end
  end
end
