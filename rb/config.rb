# TelegramChannel SDK configuration

module TelegramChannelConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "TelegramChannel",
        "slug" => "telegram-channel",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://t.me",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_channel_info" => {},
        },
      },
      "entity" => {
        "get_channel_info" => {
          "fields" => [
            {
              "name" => "description",
              "short" => "Channel description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "image",
              "short" => "URL to the channel profile image",
              "type" => "`$STRING`",
            },
            {
              "name" => "subscribers",
              "short" => "Number of channel subscribers",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "title",
              "short" => "Channel title",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "Full URL to the channel",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "short" => "Channel username",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "get_channel_info",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "n9he1",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "channel_username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{channelUsername}",
                  "rename" => {
                    "param" => {
                      "channelUsername" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TelegramChannelFeatures.make_feature(name)
  end
end
