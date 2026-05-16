
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TelegramChannelSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TelegramChannelSDK.test()
    equal(null !== testsdk, true)
  })

})
