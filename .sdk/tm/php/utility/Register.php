<?php
declare(strict_types=1);

// TelegramChannel SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TelegramChannelUtility::setRegistrar(function (TelegramChannelUtility $u): void {
    $u->clean = [TelegramChannelClean::class, 'call'];
    $u->done = [TelegramChannelDone::class, 'call'];
    $u->make_error = [TelegramChannelMakeError::class, 'call'];
    $u->feature_add = [TelegramChannelFeatureAdd::class, 'call'];
    $u->feature_hook = [TelegramChannelFeatureHook::class, 'call'];
    $u->feature_init = [TelegramChannelFeatureInit::class, 'call'];
    $u->fetcher = [TelegramChannelFetcher::class, 'call'];
    $u->make_fetch_def = [TelegramChannelMakeFetchDef::class, 'call'];
    $u->make_context = [TelegramChannelMakeContext::class, 'call'];
    $u->make_options = [TelegramChannelMakeOptions::class, 'call'];
    $u->make_request = [TelegramChannelMakeRequest::class, 'call'];
    $u->make_response = [TelegramChannelMakeResponse::class, 'call'];
    $u->make_result = [TelegramChannelMakeResult::class, 'call'];
    $u->make_point = [TelegramChannelMakePoint::class, 'call'];
    $u->make_spec = [TelegramChannelMakeSpec::class, 'call'];
    $u->make_url = [TelegramChannelMakeUrl::class, 'call'];
    $u->param = [TelegramChannelParam::class, 'call'];
    $u->prepare_auth = [TelegramChannelPrepareAuth::class, 'call'];
    $u->prepare_body = [TelegramChannelPrepareBody::class, 'call'];
    $u->prepare_headers = [TelegramChannelPrepareHeaders::class, 'call'];
    $u->prepare_method = [TelegramChannelPrepareMethod::class, 'call'];
    $u->prepare_params = [TelegramChannelPrepareParams::class, 'call'];
    $u->prepare_path = [TelegramChannelPreparePath::class, 'call'];
    $u->prepare_query = [TelegramChannelPrepareQuery::class, 'call'];
    $u->result_basic = [TelegramChannelResultBasic::class, 'call'];
    $u->result_body = [TelegramChannelResultBody::class, 'call'];
    $u->result_headers = [TelegramChannelResultHeaders::class, 'call'];
    $u->transform_request = [TelegramChannelTransformRequest::class, 'call'];
    $u->transform_response = [TelegramChannelTransformResponse::class, 'call'];
});
