describe("Controller", function() {
var controller;
var mockElement;
var htmlString


	beforeEach(function() {
    controller = new Controller

    mockElement = {
      innerHTML : ""
    }

    htmlString = "<ul><li><em>kay</em><br>my first peep :)</li></ul>"

  })

  it("should create view", function () {
    controller.createView(mockElement, htmlString)
    expect(mockElement.innerHTML).toEqual("<ul><li><em>kay</em><br>my first peep :)</li></ul>")
  })
	
})