export function addDish(dishName) {
  return fetch('/dishes/addDish', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: dishName
    })
  }).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  });
}

export function removeDish(dishId) {
  return fetch('/dishes/removeDish', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: dishId
    })
  }).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  });
}
