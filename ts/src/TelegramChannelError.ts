
import { Context } from './Context'


class TelegramChannelError extends Error {

  isTelegramChannelError = true

  sdk = 'TelegramChannel'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TelegramChannelError
}

