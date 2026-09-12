import { TelegramChannelEntityBase } from '../TelegramChannelEntityBase';
import type { TelegramChannelSDK } from '../TelegramChannelSDK';
import type { Control } from '../types';
import type { GetChannelInfo, GetChannelInfoLoadMatch } from '../TelegramChannelTypes';
declare class GetChannelInfoEntity extends TelegramChannelEntityBase<GetChannelInfo> {
    constructor(client: TelegramChannelSDK, entopts: any);
    make(this: GetChannelInfoEntity): GetChannelInfoEntity;
    load(this: any, reqmatch?: GetChannelInfoLoadMatch, ctrl?: Control): Promise<GetChannelInfoEntity>;
}
export { GetChannelInfoEntity };
