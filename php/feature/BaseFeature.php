<?php
declare(strict_types=1);

// TelegramChannel SDK base feature

class TelegramChannelBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TelegramChannelContext $ctx, array $options): void {}
    public function PostConstruct(TelegramChannelContext $ctx): void {}
    public function PostConstructEntity(TelegramChannelContext $ctx): void {}
    public function SetData(TelegramChannelContext $ctx): void {}
    public function GetData(TelegramChannelContext $ctx): void {}
    public function GetMatch(TelegramChannelContext $ctx): void {}
    public function SetMatch(TelegramChannelContext $ctx): void {}
    public function PrePoint(TelegramChannelContext $ctx): void {}
    public function PreSpec(TelegramChannelContext $ctx): void {}
    public function PreRequest(TelegramChannelContext $ctx): void {}
    public function PreResponse(TelegramChannelContext $ctx): void {}
    public function PreResult(TelegramChannelContext $ctx): void {}
    public function PreDone(TelegramChannelContext $ctx): void {}
    public function PreUnexpected(TelegramChannelContext $ctx): void {}
}
