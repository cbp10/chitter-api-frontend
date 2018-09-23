function PeepList() {
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
    new PeepListView.getHTML(data)
  })
  .catch(function(error) {
    console.log(error)
  });
}
