# TelegramChannel SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class TelegramChannelContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = TelegramChannelHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = TelegramChannelHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = TelegramChannelControl.new
    ctrl_raw = TelegramChannelHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = TelegramChannelHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = TelegramChannelHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = TelegramChannelHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = TelegramChannelHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = TelegramChannelHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = TelegramChannelHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = TelegramChannelHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = TelegramChannelHelpers.to_map(TelegramChannelHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = TelegramChannelHelpers.to_map(TelegramChannelHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = TelegramChannelHelpers.to_map(TelegramChannelHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = TelegramChannelHelpers.to_map(TelegramChannelHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = TelegramChannelHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = TelegramChannelHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(TelegramChannelSpec) ? sp : basectx&.spec

    r = TelegramChannelHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(TelegramChannelResult) ? r : basectx&.result

    rp = TelegramChannelHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(TelegramChannelResponse) ? rp : basectx&.response

    opname = TelegramChannelHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    return @opmap[opname] if @opmap[opname]
    return TelegramChannelOperation.new({}) if opname.empty?

    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = TelegramChannelOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[opname] = op
    op
  end

  def make_error(code, msg)
    TelegramChannelError.new(code, msg, self)
  end
end
