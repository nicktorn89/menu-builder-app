export function getMainDishes() {
  return fetch('/dishes')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  });
}