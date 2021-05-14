import { defaultOptions } from '../defaultOptions'
import { supportsCSSMethod } from 'js-snip'

export const normalizeSnipMethod = (state, snipMethod) => {
  if (!supportsCSSMethod()) {
    return 'js'
  }

  if (snipMethod === 'css' || snipMethod === 'js') {
    return snipMethod
  }

  const { snipMethod: globalSnipMethod } = state.options

  if (globalSnipMethod === 'css' || globalSnipMethod === 'js') {
    return globalSnipMethod
  }

  return defaultOptions.snipMethod
}
