import { snip, unsnip } from 'js-snip'

export const getSnipText = (state) => (el) => {
  // TODO: add test cases for complex scenarios
  unsnip(el)

  const { maxLines, snipMethod, ellipsis } = state.elementMap.get(el)
  snip(el, { maxLines, method: snipMethod, ellipsis })
}
