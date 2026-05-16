<?php
declare(strict_types=1);

// TelegramChannel SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TelegramChannelMakeContext
{
    public static function call(array $ctxmap, ?TelegramChannelContext $basectx): TelegramChannelContext
    {
        return new TelegramChannelContext($ctxmap, $basectx);
    }
}
