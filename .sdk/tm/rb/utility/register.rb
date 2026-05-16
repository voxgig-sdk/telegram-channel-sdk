# TelegramChannel SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TelegramChannelUtility.registrar = ->(u) {
  u.clean = TelegramChannelUtilities::Clean
  u.done = TelegramChannelUtilities::Done
  u.make_error = TelegramChannelUtilities::MakeError
  u.feature_add = TelegramChannelUtilities::FeatureAdd
  u.feature_hook = TelegramChannelUtilities::FeatureHook
  u.feature_init = TelegramChannelUtilities::FeatureInit
  u.fetcher = TelegramChannelUtilities::Fetcher
  u.make_fetch_def = TelegramChannelUtilities::MakeFetchDef
  u.make_context = TelegramChannelUtilities::MakeContext
  u.make_options = TelegramChannelUtilities::MakeOptions
  u.make_request = TelegramChannelUtilities::MakeRequest
  u.make_response = TelegramChannelUtilities::MakeResponse
  u.make_result = TelegramChannelUtilities::MakeResult
  u.make_point = TelegramChannelUtilities::MakePoint
  u.make_spec = TelegramChannelUtilities::MakeSpec
  u.make_url = TelegramChannelUtilities::MakeUrl
  u.param = TelegramChannelUtilities::Param
  u.prepare_auth = TelegramChannelUtilities::PrepareAuth
  u.prepare_body = TelegramChannelUtilities::PrepareBody
  u.prepare_headers = TelegramChannelUtilities::PrepareHeaders
  u.prepare_method = TelegramChannelUtilities::PrepareMethod
  u.prepare_params = TelegramChannelUtilities::PrepareParams
  u.prepare_path = TelegramChannelUtilities::PreparePath
  u.prepare_query = TelegramChannelUtilities::PrepareQuery
  u.result_basic = TelegramChannelUtilities::ResultBasic
  u.result_body = TelegramChannelUtilities::ResultBody
  u.result_headers = TelegramChannelUtilities::ResultHeaders
  u.transform_request = TelegramChannelUtilities::TransformRequest
  u.transform_response = TelegramChannelUtilities::TransformResponse
}
