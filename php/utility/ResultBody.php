<?php
declare(strict_types=1);

// TelegramChannel SDK utility: result_body

class TelegramChannelResultBody
{
    public static function call(TelegramChannelContext $ctx): ?TelegramChannelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
