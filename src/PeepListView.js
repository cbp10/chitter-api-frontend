function PeepListView() {
}

PeepListView.prototype.getHTML = function(peepsArray) {



  var string = "<ul>"

  
  peepsArray.forEach(function(peep) { 
    string += `<li><em>${peep.user.handle}</em><br>${peep.body}</li>`
    })
  


  return string + "</ul>"
}