describe("PeepListView", function() {
  var peepListView;

  beforeEach(function() {
    peepsDouble = [
              {
                "id": 3,
                "body": "my first peep :)",
                "created_at": "2018-06-23T13:21:23.317Z",
                "updated_at": "2018-06-23T13:21:23.317Z",
                "user": {
                  "id": 1,
                  "handle": "kay"
                },
                "likes": [{
                  "user": {
                    "id": 1,
                    "handle": "kay"
                  }
                }]
              }
            ]

      peepListView = new PeepListView
      })

  it("should return html for all peeps view", function() {
    expect(peepListView.getHTML(peepsDouble)).toEqual("<ul><li><em>kay</em><br>my first peep :)</li></ul>")

  })



})