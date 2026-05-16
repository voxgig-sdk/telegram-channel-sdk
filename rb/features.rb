# TelegramChannel SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TelegramChannelFeatures
  def self.make_feature(name)
    case name
    when "base"
      TelegramChannelBaseFeature.new
    when "test"
      TelegramChannelTestFeature.new
    else
      TelegramChannelBaseFeature.new
    end
  end
end
