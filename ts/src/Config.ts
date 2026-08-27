
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TelegramChannel',
        slug: "telegram-channel",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://t.me",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_channel_info: {
      },

    }
  }


  entity = {
    "get_channel_info": {
      "fields": [
        {
          "name": "description",
          "short": "Channel description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "URL to the channel profile image",
          "type": "`$STRING`"
        },
        {
          "name": "subscribers",
          "short": "Number of channel subscribers",
          "type": "`$INTEGER`"
        },
        {
          "name": "title",
          "short": "Channel title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Full URL to the channel",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "Channel username",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{channelUsername}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "channelUsername": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

