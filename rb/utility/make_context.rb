# TelegramChannel SDK utility: make_context
require_relative '../core/context'
module TelegramChannelUtilities
  MakeContext = ->(ctxmap, basectx) {
    TelegramChannelContext.new(ctxmap, basectx)
  }
end
