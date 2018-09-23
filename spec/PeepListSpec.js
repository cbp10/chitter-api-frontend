describe("PeepList", function() {
  var peepList
  var promiseHelper;

  beforeEach(function() {
    var fetchPromise = new Promise(function(resolve) {
      promiseHelper = {
        resolve: resolve
      };
    });
    peepList = new PeepList
    spyOn(window, 'fetch').and.returnValue(fetchPromise);
  
  })


  it('fetches peeps from the chitter API', function() {
    peepList.fetchAllPeeps()
    expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api.herokuapp.com/peeps');
  });

   it('returns a promise', function() {
    expect(peepList.fetchAllPeeps()).toEqual(jasmine.any(Promise));
  });

  describe('on successful fetch', function() {
    beforeEach(function() {
      var response = new Response(JSON.stringify({ 
        id: 3, 
        body: "My first peep :)",
        created_at: "2018-06-23T13:21:23.317Z",
        updated_at: "2018-06-23T13:21:23.317Z",
        user: {
          id: 1,
          handle: "kay"
        },
        likes: [{
          user: {
            id: 1,
            handle: "kay"
          }
        }]
      }));
      promiseHelper.resolve(response);
    });

    it('resolves its promise with the peeps data', function(done) {
      peepList.fetchAllPeeps().then(function(data) {
        expect(data.id).toEqual(3);
        expect(data.body).toEqual("My first peep :)");
        expect(data.user.id).toEqual(1);
        expect(data.likes[0].user.handle).toEqual("kay");
        done();
      });
    });

  })

  describe(".getAllPeeps", function() {
    beforeEach(function() {
      peepList.peeps = [
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
    })

    it("should return array of peeps", function() {
      expect(peepList.getAllPeeps().length).toEqual(1)
    })

  })


})
