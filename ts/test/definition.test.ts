import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "get_channel_info",
    "accessor": "GetChannelInfo",
    "op": "load",
    "method": "GET",
    "path": "/{channelUsername}",
    "args": [
      {
        "name": "id",
        "wire": "channelUsername",
        "value": "n9he1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "username": "n9he1",
      "title": "» مُـنذ 25 يَنـايِر \"🪐♥„",
      "description": "مُجرد زاوية أخرى من عالمي, أدون فيها ما لا يصلح للضجيج 🤍",
      "subscribers": 12177,
      "image": "x",
      "url": "https://t.me/n9he1"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
