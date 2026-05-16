-- ProjectName SDK exists test

local sdk = require("telegram-channel_sdk")

describe("TelegramChannelSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
