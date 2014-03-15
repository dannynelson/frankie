var app = require('../../api/server');

describe('server', function(){
  it('should serve static files from /public', function (done) {
    request(app)
      .get('/users')
      .expect(200, done);
  });
});
