export function getProducts() {
  return fetch('/products')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  });
};

export function addProduct(prodName) {
  return fetch('/products/addProduct', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: prodName,
      }),
   })
    .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
    });
};

export function removeProduct(prodId) {
  return fetch('/products/removeProduct', {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: prodId,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    });
};