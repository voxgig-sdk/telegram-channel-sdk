<?php
declare(strict_types=1);

// TelegramChannel SDK utility: prepare_body

class TelegramChannelPrepareBody
{
    public static function call(TelegramChannelContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
