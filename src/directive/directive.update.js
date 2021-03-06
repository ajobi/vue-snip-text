import { addObserver, normalizeMaxLines, normalizeSnipMethod, destroyObserver } from '../utils'

export const getUpdate = (state, snipText) => (el, { value, arg }) => {
  const elState = state.elementMap.get(el)

  const prevMaxlines = elState.maxLines
  const prevMethod = elState.snipMethod

  elState.maxLines = normalizeMaxLines(state, value)
  elState.snipMethod = normalizeSnipMethod(state, arg)

  const needsObserver = elState.snipMethod === 'js'
  needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(state, snipText, el) : destroyObserver(state, el)

  const needsSnipping = (prevMaxlines !== elState.maxLines) || (prevMethod !== elState.snipMethod && elState.snipMethod === 'css')
  needsSnipping && snipText(el)
}
