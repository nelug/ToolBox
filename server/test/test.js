let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);


describe('Iecho', () => {
 
    /*
      * Test the /GET route
      */
    describe('/GET iecho', () => {
        it('Get revert text', (done) => {
            chai.request(server)
                .get('/iecho?text=test')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.to.to.deep.equal({text: 'tset'});
                    done();
                });
        });
    });

});