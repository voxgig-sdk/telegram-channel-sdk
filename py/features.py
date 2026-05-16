# TelegramChannel SDK feature factory

from feature.base_feature import TelegramChannelBaseFeature
from feature.test_feature import TelegramChannelTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TelegramChannelBaseFeature(),
        "test": lambda: TelegramChannelTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
