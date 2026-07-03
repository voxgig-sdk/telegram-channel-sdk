package voxgigtelegramchannelsdk

import (
	"github.com/voxgig-sdk/telegram-channel-sdk/go/core"
	"github.com/voxgig-sdk/telegram-channel-sdk/go/entity"
	"github.com/voxgig-sdk/telegram-channel-sdk/go/feature"
	_ "github.com/voxgig-sdk/telegram-channel-sdk/go/utility"
)

// Type aliases preserve external API.
type TelegramChannelSDK = core.TelegramChannelSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TelegramChannelEntity = core.TelegramChannelEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TelegramChannelError = core.TelegramChannelError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetChannelInfoEntityFunc = func(client *core.TelegramChannelSDK, entopts map[string]any) core.TelegramChannelEntity {
		return entity.NewGetChannelInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTelegramChannelSDK = core.NewTelegramChannelSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTelegramChannelSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TelegramChannelSDK  { return NewTelegramChannelSDK(nil) }
func Test() *TelegramChannelSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
