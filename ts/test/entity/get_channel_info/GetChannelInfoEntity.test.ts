

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TelegramChannelSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetChannelInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TELEGRAM_CHANNEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('TELEGRAM_CHANNEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TelegramChannelSDK.test()
    const ent = testsdk.GetChannelInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TELEGRAM_CHANNEL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_channel_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Channel description","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the channel profile image","type":"`$STRING`","index$":2},{"active":true,"name":"subscribers","req":false,"short":"Number of channel subscribers","type":"`$INTEGER`","index$":3},{"active":true,"name":"title","req":false,"short":"Channel title","type":"`$STRING`","index$":4},{"active":true,"format":"uri","name":"url","req":false,"short":"Full URL to the channel","type":"`$STRING`","index$":5},{"active":true,"name":"username","req":false,"short":"Channel username","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"get_channel_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"n9he1","kind":"param","name":"id","orig":"channel_username","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{channelUsername}","json":"{\"operationId\":\"getChannelInfo\",\"parameters\":[{\"description\":\"The username of the Telegram channel (without @)\",\"in\":\"path\",\"name\":\"channelUsername\",\"required\":true,\"schema\":{\"example\":\"n9he1\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Channel description\",\"example\":\"مُجرد زاوية أخرى من عالمي, أدون فيها ما لا يصلح للضجيج 🤍\",\"type\":\"string\"},\"image\":{\"description\":\"URL to the channel profile image\",\"format\":\"uri\",\"type\":\"string\"},\"subscribers\":{\"description\":\"Number of channel subscribers\",\"example\":12177,\"type\":\"integer\"},\"title\":{\"description\":\"Channel title\",\"example\":\"» مُـنذ 25 يَنـايِر \\\"🪐♥„\",\"type\":\"string\"},\"url\":{\"description\":\"Full URL to the channel\",\"example\":\"https://t.me/n9he1\",\"format\":\"uri\",\"type\":\"string\"},\"username\":{\"description\":\"Channel username\",\"example\":\"n9he1\",\"type\":\"string\"}},\"type\":\"object\"}},\"text/html\":{\"schema\":{\"description\":\"HTML page containing channel information\",\"type\":\"string\"}}},\"description\":\"Successful response with channel information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid channel username\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Invalid channel username\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Channel not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Channel not found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Rate limit exceeded\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Too many requests\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{channelUsername}","rename":{"param":{"channelUsername":"id"}},"segments":[{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_channel_info","name__orig":"get_channel_info","Name":"GetChannelInfo","name_":"get_channel_info","name-":"get-channel-info","NAME":"GET_CHANNEL_INFO","index$":0}, {"active":true,"entity":"get_channel_info","key$":"BasicGetChannelInfoFlow","kind":"basic","name":"BasicGetChannelInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_channel_info_ref01","srcdatavar":"get_channel_info_ref01_data","suffix":"_dt0"},"match":{"id":"get_channel_info01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_channel_info_ref01"}}],"index$":0}]}, 'GetChannelInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_channel_info_ref01_data = Object.values(setup.data.existing.get_channel_info)[0] as any

    // LOAD
    const get_channel_info_ref01_ent = client.GetChannelInfo()
    const get_channel_info_ref01_match_dt0: any = {}
    get_channel_info_ref01_match_dt0.id = get_channel_info_ref01_data.id
    const get_channel_info_ref01_data_dt0 = (await get_channel_info_ref01_ent.load(get_channel_info_ref01_match_dt0)).data()
    assert(get_channel_info_ref01_data_dt0.id === get_channel_info_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_channel_info/GetChannelInfoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TelegramChannelSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_channel_info01','get_channel_info02','get_channel_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID': idmap,
    'TELEGRAM_CHANNEL_TEST_LIVE': 'FALSE',
    'TELEGRAM_CHANNEL_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID']

  const live = 'TRUE' === env.TELEGRAM_CHANNEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TelegramChannelSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TELEGRAM_CHANNEL_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
