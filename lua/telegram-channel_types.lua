-- Typed models for the TelegramChannel SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetChannelInfo
---@field description? string
---@field id? string
---@field image? string
---@field subscribers? number
---@field title? string
---@field url? string
---@field username? string

---@class GetChannelInfoLoadMatch
---@field id string

local M = {}

return M
