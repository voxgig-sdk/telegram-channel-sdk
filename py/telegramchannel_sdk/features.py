# TelegramChannel SDK feature factory

from telegramchannel_sdk.feature.base_feature import TelegramChannelBaseFeature
from telegramchannel_sdk.feature.ratelimit_feature import TelegramChannelRatelimitFeature
from telegramchannel_sdk.feature.retry_feature import TelegramChannelRetryFeature
from telegramchannel_sdk.feature.test_feature import TelegramChannelTestFeature
from telegramchannel_sdk.feature.timeout_feature import TelegramChannelTimeoutFeature


_FEATURES = {
    "base": lambda: TelegramChannelBaseFeature(),
    "ratelimit": lambda: TelegramChannelRatelimitFeature(),
    "retry": lambda: TelegramChannelRetryFeature(),
    "test": lambda: TelegramChannelTestFeature(),
    "timeout": lambda: TelegramChannelTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
