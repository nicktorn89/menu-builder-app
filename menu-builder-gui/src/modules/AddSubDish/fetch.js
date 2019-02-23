export function addSubDish(dishName) {
  return fetch('/sub-dishes/addSubDish', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: dishName,
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

export function removeSubDish(dishId) {
  return fetch('/sub-dishes/removeSubDish', {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: dishId,
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