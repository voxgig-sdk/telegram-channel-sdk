# TelegramChannel SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "TelegramChannel",
            "slug": "telegram-channel",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://t.me",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_channel_info": {},
            },
        },
        "entity": {
      "get_channel_info": {
        "fields": [
          {
            "name": "description",
            "short": "Channel description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "image",
            "short": "URL to the channel profile image",
            "type": "`$STRING`",
          },
          {
            "name": "subscribers",
            "short": "Number of channel subscribers",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "short": "Channel title",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Full URL to the channel",
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "short": "Channel username",
            "type": "`$STRING`",
          },
        ],
        "name": "get_channel_info",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "n9he1",
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_username",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{channelUsername}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "channelUsername": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
