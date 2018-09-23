function PeepListView() {}

  PeepListView.prototype.getHTML = function(peepsArray = new PeepList().fetchAllPeeps()) {
    var string = "<ul>"

    if(peepsArray.length > 0) {
      peepsArray.forEach(function(peep) { 
      string += `<li><em>${peep.user.handle}</em><br>${peep.body}</li>`
      })
    }

    return string + "</ul>"
}