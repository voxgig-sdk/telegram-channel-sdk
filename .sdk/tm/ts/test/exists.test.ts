
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TelegramChannelSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TelegramChannelSDK.test()
    equal(testsdk instanceof TelegramChannelSDK, true,
      'TelegramChannelSDK.test() must return a client synchronously')
  })

})
