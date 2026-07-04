# frozen_string_literal: true

# Typed models for the TelegramChannel SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetChannelInfo entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] subscriber
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
GetChannelInfo = Struct.new(
  :description,
  :image,
  :subscriber,
  :title,
  :url,
  :username,
  keyword_init: true
)

# Request payload for GetChannelInfo#load.
#
# @!attribute [rw] id
#   @return [String]
GetChannelInfoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

