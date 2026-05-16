package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetChannelInfoEntityFunc func(client *TelegramChannelSDK, entopts map[string]any) TelegramChannelEntity

