<?php
declare(strict_types=1);

// TelegramChannel SDK utility: result_headers

class TelegramChannelResultHeaders
{
    public static function call(TelegramChannelContext $ctx): ?TelegramChannelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
