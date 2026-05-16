-- TelegramChannel SDK error

local TelegramChannelError = {}
TelegramChannelError.__index = TelegramChannelError


function TelegramChannelError.new(code, msg, ctx)
  local self = setmetatable({}, TelegramChannelError)
  self.is_sdk_error = true
  self.sdk = "TelegramChannel"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TelegramChannelError:error()
  return self.msg
end


function TelegramChannelError:__tostring()
  return self.msg
end


return TelegramChannelError
