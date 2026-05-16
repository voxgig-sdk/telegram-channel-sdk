<?php
declare(strict_types=1);

// TelegramChannel SDK utility: feature_add

class TelegramChannelFeatureAdd
{
    public static function call(TelegramChannelContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
