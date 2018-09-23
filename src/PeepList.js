function PeepList() {
  this.peeps = []
}

PeepList.prototype.fetchAllPeeps = function() {
  return fetch("https://chitter-backend-api.herokuapp.com/peeps")
  .then(function(response) {
    return response.json();
  })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // })
  .then(function(data) {
    this.peeps = data
    return data
  });
}

PeepList.prototype.getAllPeeps = function() {
  return this.peeps
}