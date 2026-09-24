"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetChannelInfoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TELEGRAM_CHANNEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TELEGRAM_CHANNEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TelegramChannelSDK.test();
        const ent = testsdk.GetChannelInfo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TELEGRAM_CHANNEL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_channel_info.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Channel description", "t": "`$STRING`", "key$": "description", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "image": { "a": true, "fo": "uri", "h": "Image", "n": "image", "r": false, "sh": "URL to the channel profile image", "t": "`$STRING`", "key$": "image", "index$": 2 }, "subscribers": { "a": true, "h": "Subscribers", "n": "subscribers", "r": false, "sh": "Number of channel subscribers", "t": "`$INTEGER`", "key$": "subscribers", "index$": 3 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Channel title", "t": "`$STRING`", "key$": "title", "index$": 4 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "Full URL to the channel", "t": "`$STRING`", "key$": "url", "index$": 5 }, "username": { "a": true, "h": "Username", "n": "username", "r": false, "sh": "Channel username", "t": "`$STRING`", "key$": "username", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "get_channel_info", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /{channelUsername}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "n9he1", "k": "param", "n": "id", "or": "channel_username", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{channelUsername}", "q": { "exist": ["id"] }, "r": { "param": { "channelUsername": "id" } }, "s": [{ "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_channel_info", "name__orig": "get_channel_info", "Name": "GetChannelInfo", "name_": "get_channel_info", "name-": "get-channel-info", "NAME": "GET_CHANNEL_INFO", "index$": 0 }, { "active": true, "entity": "get_channel_info", "key$": "BasicGetChannelInfoFlow", "kind": "basic", "name": "BasicGetChannelInfoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "get_channel_info_ref01", "srcdatavar": "get_channel_info_ref01_data", "suffix": "_dt0" }, "m": { "id": "get_channel_info01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_channel_info_ref01" } }], "index$": 0 }] }, 'GetChannelInfo', { "GET /{channelUsername}": { "protocol": "http", "operationId": "getChannelInfo", "responses": { "200": { "description": "Successful response with channel information", "content": { "text/html": { "schema": { "type": "string", "description": "HTML page containing channel information" } }, "application/json": { "schema": { "type": "object", "properties": { "username": { "description": "Channel username", "example": "n9he1", "key$": "username", "type": "string" }, "title": { "description": "Channel title", "example": "» مُـنذ 25 يَنـايِر \"🪐♥„", "key$": "title", "type": "string" }, "description": { "description": "Channel description", "example": "مُجرد زاوية أخرى من عالمي, أدون فيها ما لا يصلح للضجيج 🤍", "key$": "description", "type": "string" }, "subscribers": { "description": "Number of channel subscribers", "example": 12177, "key$": "subscribers", "type": "integer" }, "image": { "description": "URL to the channel profile image", "format": "uri", "key$": "image", "type": "string" }, "url": { "description": "Full URL to the channel", "example": "https://t.me/n9he1", "format": "uri", "key$": "url", "type": "string" } }, "index$": 0 } } } }, "400": { "description": "Invalid channel username", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Invalid channel username" } } } } } }, "404": { "description": "Channel not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Channel not found" } } } } } }, "429": { "description": "Too many requests", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "Rate limit exceeded" } } } } } } }, "parameters": [{ "name": "channelUsername", "in": "path", "description": "The username of the Telegram channel (without @)", "required": true, "schema": { "type": "string", "example": "n9he1" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_channel_info_ref01_data = Object.values(setup.data.existing.get_channel_info)[0];
        // LOAD
        const get_channel_info_ref01_ent = client.GetChannelInfo();
        const get_channel_info_ref01_match_dt0 = {};
        get_channel_info_ref01_match_dt0.id = get_channel_info_ref01_data.id;
        const get_channel_info_ref01_data_dt0 = (await get_channel_info_ref01_ent.load(get_channel_info_ref01_match_dt0)).data();
        (0, node_assert_1.default)(get_channel_info_ref01_data_dt0.id === get_channel_info_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_channel_info/GetChannelInfoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TelegramChannelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_channel_info01', 'get_channel_info02', 'get_channel_info03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID': idmap,
        'TELEGRAM_CHANNEL_TEST_LIVE': 'FALSE',
        'TELEGRAM_CHANNEL_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID'];
    const live = 'TRUE' === env.TELEGRAM_CHANNEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TELEGRAM_CHANNEL_TEST_GET_CHANNEL_INFO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TelegramChannelSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=GetChannelInfoEntity.test.js.map