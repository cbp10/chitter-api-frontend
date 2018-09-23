function Controller() {}


Controller.prototype.createView = function(peepList = new PeepList) {


  peepList.fetchAllPeeps()
  // document.getElementById("peeps").innerHTML = peepListView.getHTML()
  // console.log(document.getElementById("peeps").innerHTML)
};

