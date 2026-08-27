-- TelegramChannel SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TelegramChannel",
      slug = "telegram-channel",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://t.me",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_channel_info"] = {},
      },
    },
    entity = {
      ["get_channel_info"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Channel description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to the channel profile image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subscribers",
            ["short"] = "Number of channel subscribers",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "title",
            ["short"] = "Channel title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "Full URL to the channel",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "username",
            ["short"] = "Channel username",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_channel_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "n9he1",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "channel_username",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{channelUsername}",
                ["parts"] = {
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["channelUsername"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
