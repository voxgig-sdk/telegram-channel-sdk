# TelegramChannel SDK utility: feature_add
module TelegramChannelUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
