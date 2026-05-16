# ProjectName SDK exists test

import pytest
from telegramchannel_sdk import TelegramChannelSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TelegramChannelSDK.test(None, None)
        assert testsdk is not None
