import Storage from 'web-storage-cache'
const localstorage = new Storage()
export function setlocalstorage (key, value) {
  return localstorage.set(key, value)
}
export function getlocalstorage (key) {
  return localstorage.get(key)
}
export function removelocalstorage (key) {
  return localstorage.delete(key)
}
export function clearlocalstorage () {
  return localstorage.clear()
}
export function setbookobject (filename, key, value) {
  let book = getlocalstorage(`${filename}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  setlocalstorage(`${filename}-info`, book)
}
