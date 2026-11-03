

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TelegramChannelSDK, BaseFeature, config, stdutil } from '../../..'

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


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TelegramChannelSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GetChannelInfo().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TELEGRAM_CHANNEL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_channel_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Channel description","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to the channel profile image","t":"`$STRING`","key$":"image","index$":2},"subscribers":{"a":true,"h":"Subscribers","n":"subscribers","r":false,"sh":"Number of channel subscribers","t":"`$INTEGER`","key$":"subscribers","index$":3},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Channel title","t":"`$STRING`","key$":"title","index$":4},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"Full URL to the channel","t":"`$STRING`","key$":"url","index$":5},"username":{"a":true,"h":"Username","n":"username","r":false,"sh":"Channel username","t":"`$STRING`","key$":"username","index$":6}},"id":{"field":"id","name":"id"},"name":"get_channel_info","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{channelUsername}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"n9he1","k":"param","n":"id","or":"channelUsername","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{channelUsername}","q":{"exist":["id"]},"r":{"param":{"channelUsername":"id"}},"rs":{"alternatives":[{"kind":"raw","media":"text/html"}],"kind":"json","media":"application/json"},"s":[{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_channel_info","name__orig":"get_channel_info","Name":"GetChannelInfo","name_":"get_channel_info","name-":"get-channel-info","NAME":"GET_CHANNEL_INFO","index$":0}, {"active":true,"entity":"get_channel_info","key$":"BasicGetChannelInfoFlow","kind":"basic","name":"BasicGetChannelInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_channel_info_ref01","srcdatavar":"get_channel_info_ref01_data","suffix":"_dt0"},"m":{"id":"get_channel_info01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_channel_info_ref01"}}],"index$":0,"route":"GET /{channelUsername}","record":{}}]}, 'GetChannelInfo', {"GET /{channelUsername}":{"protocol":"http","parameters":[{"name":"channelUsername","in":"path","description":"The username of the Telegram channel (without @)","required":true,"schema":{"type":"string","example":"n9he1"},"index$":0}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
  
