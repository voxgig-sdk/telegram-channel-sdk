-- TelegramChannel SDK error

local json = require("dkjson")

local TelegramChannelError = {}
TelegramChannelError.__index = TelegramChannelError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function TelegramChannelError.new(code, msg, ctx)
  local self = setmetatable({}, TelegramChannelError)
  self.is_sdk_error = true
  self.sdk = "TelegramChannel"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function TelegramChannelError:context()
  return CONTEXT[self]
end


function TelegramChannelError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function TelegramChannelError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function TelegramChannelError:to_json()
  return json.encode(self:to_table())
end


function TelegramChannelError:__tostring()
  return self.msg
end


function TelegramChannelError.__tojson(self)
  return self:to_json()
end


return TelegramChannelError
