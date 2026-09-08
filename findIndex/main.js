function findNeedle(haystack) {
  const needle = haystack.findIndex((needle=>needle=="needle"))
  return `found the needle at position ${needle}`
}
findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])