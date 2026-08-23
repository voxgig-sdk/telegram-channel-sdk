package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TelegramChannel",
			"slug": "telegram-channel",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://t.me",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_channel_info": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_channel_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Channel description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image",
						"short": "URL to the channel profile image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribers",
						"short": "Number of channel subscribers",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"short": "Channel title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "Full URL to the channel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "Channel username",
						"type": "`$STRING`",
					},
				},
				"name": "get_channel_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "n9he1",
											"kind": "param",
											"name": "id",
											"orig": "channel_username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{channelUsername}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelUsername": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
