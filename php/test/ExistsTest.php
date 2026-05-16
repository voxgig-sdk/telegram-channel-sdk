<?php
declare(strict_types=1);

// TelegramChannel SDK exists test

require_once __DIR__ . '/../telegramchannel_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TelegramChannelSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
