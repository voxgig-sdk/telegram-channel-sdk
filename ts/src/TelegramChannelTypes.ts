// Typed models for the TelegramChannel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetChannelInfo {
  description?: string
  image?: string
  subscriber?: number
  title?: string
  url?: string
  username?: string
}

export interface GetChannelInfoLoadMatch {
  id: string
}

