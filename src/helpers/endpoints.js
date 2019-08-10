
export function getRestaruants() {
  request('api/cafe/nearby/restaurants');
};


function request(endpoint) {
  fetch(endpoint).then(response => {
    if (response.status === 200) {
      response.json().then(data => {
        console.log(data);
        return data;
      })
    } else {
      console.log('There is no session');
    }
  });
}