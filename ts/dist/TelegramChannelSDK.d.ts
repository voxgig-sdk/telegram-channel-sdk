import { GetChannelInfoEntity } from './entity/GetChannelInfoEntity';
export type * from './TelegramChannelTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TelegramChannelEntityBase } from './TelegramChannelEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class TelegramChannelSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetChannelInfo(entopts?: Record<string, any>): GetChannelInfoEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TelegramChannelSDK;
    tester(testopts?: any, sdkopts?: any): TelegramChannelSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TelegramChannelSDK;
export { stdutil, config, BaseFeature, TelegramChannelEntityBase, TelegramChannelSDK, SDK, };
export type { DirectResult };
