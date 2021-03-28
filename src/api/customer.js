export const reqCustomers = () => {
  return fetch('/data/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(function (response) {
    return response.json()
  })
}
