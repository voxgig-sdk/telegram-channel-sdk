# TelegramChannel SDK utility: make_context

from telegramchannel_sdk.core.context import TelegramChannelContext


def make_context_util(ctxmap, basectx):
    return TelegramChannelContext(ctxmap, basectx)
