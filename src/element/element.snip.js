import { snip } from 'js-snip'

export const getSnipText = (state) => (el) => {
  const { maxLines, snipMethod, ellipsis, separators } = state.elementMap.get(el)
  snip(el, { maxLines, method: snipMethod, ellipsis, separators })
}
