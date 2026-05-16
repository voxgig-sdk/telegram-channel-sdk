# TelegramChannel SDK utility: prepare_body
module TelegramChannelUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
