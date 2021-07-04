import { normalizeMaxLines, normalizeSnipMethod, addObserver } from '../utils'

export const getInserted = (state, snipText) => (el, { value, arg }) => {
  const { elementMap } = state

  const elState = {
    maxLines: normalizeMaxLines(state, value),
    snipMethod: normalizeSnipMethod(state, arg)
  }

  elementMap.set(el, elState)

  const needsObserver = elState.snipMethod === 'js'
  needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(state, snipText, el) : snipText(el)
}
