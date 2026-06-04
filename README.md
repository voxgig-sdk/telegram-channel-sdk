# TelegramChannel SDK

Look up public Telegram channel details and preview images via t.me URLs

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Telegram Channel API

This SDK wraps `https://t.me`, the public-facing web surface for [Telegram](https://telegram.org/) channels, groups, and users. Each `t.me/<name>` URL renders a lightweight preview page for the corresponding Telegram resource, which is what this SDK reads from.

What you get from the API:

- Basic public metadata for a Telegram channel addressed by its username
- Channel preview imagery exposed on the `t.me` preview page

Telegram itself is operated by [Telegram FZ-LLC / Telegram Messenger Inc.](https://telegram.org/). The `t.me` previews are public and require no authentication, but they only surface information that the channel owner has chosen to make public. For programmatic access to Telegram's full feature set (sending messages, joining channels, reading history) you generally need the official [Telegram Bot API](https://core.telegram.org/bots/api) or [MTProto client API](https://core.telegram.org/api).

## Try it

**TypeScript**
```bash
npm install telegram-channel
```

**Python**
```bash
pip install telegram-channel-sdk
```

**PHP**
```bash
composer require voxgig/telegram-channel-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/telegram-channel-sdk/go
```

**Ruby**
```bash
gem install telegram-channel-sdk
```

**Lua**
```bash
luarocks install telegram-channel-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TelegramChannelSDK } from 'telegram-channel'

const client = new TelegramChannelSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o telegram-channel-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "telegram-channel": {
      "command": "/abs/path/to/telegram-channel-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetChannelInfo** | Public-channel lookup resource that returns the basic profile information and preview image surfaced on a channel's `t.me/<username>` page. | `/{channelUsername}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from telegramchannel_sdk import TelegramChannelSDK

client = TelegramChannelSDK({})


# Load a specific getchannelinfo
getchannelinfo, err = client.GetChannelInfo(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'telegramchannel_sdk.php';

$client = new TelegramChannelSDK([]);


// Load a specific getchannelinfo
[$getchannelinfo, $err] = $client->GetChannelInfo(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/telegram-channel-sdk/go"

client := sdk.NewTelegramChannelSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TelegramChannel_sdk"

client = TelegramChannelSDK.new({})


# Load a specific getchannelinfo
getchannelinfo, err = client.GetChannelInfo(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("telegram-channel_sdk")

local client = sdk.new({})


-- Load a specific getchannelinfo
local getchannelinfo, err = client:GetChannelInfo(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TelegramChannelSDK.test()
const result = await client.GetChannelInfo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TelegramChannelSDK.test(None, None)
result, err = client.GetChannelInfo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TelegramChannelSDK::test(null, null);
[$result, $err] = $client->GetChannelInfo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetChannelInfo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TelegramChannelSDK.test(nil, nil)
result, err = client.GetChannelInfo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetChannelInfo(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Telegram Channel API

- Upstream: [https://t.me](https://t.me)
- API docs: [https://core.telegram.org/api](https://core.telegram.org/api)

---

Generated from the Telegram Channel API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
