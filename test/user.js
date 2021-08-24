const {expect} = require('chai');
const request = require('supertest');
const app = require('../app');

describe('User Api Testing ', () => {
    
    it('should create a user',  (done) => {
        request(app)
        .post('/api/user')
        .send({email: 'test26@gmail.com', password: 'yahhooo12344'})
        .set('protect_key', '05c1f0534de526c320bc883af19e0d0b')
        .expect(200)
        .end((err, res) => {
            expect(res.body.result).equal(true)
            done()
        })

   });

   it('Get all user', (done) => {
    request(app)
    .get('/api/user')
    .expect(200)
    .end((err, res) => {
        expect(res.body.result).equal(true)
        done()
    })
    })

    it('Delete existing User', (done) => {
         request(app)
        .delete('/api/user?id=61251de101a3712c8cab292b')
        .set('protect_key', '05c1f0534de526c320bc883af19e0d0b')
        .expect(200)
        .end((err, res) => {
            expect(res.body.result).equal(true)
            done()
        }) 
    })

    it('Login user', (done) => {
        request(app)
       .post('/api/login')
       .send({
        "email":"indra@gmail.com",
        "password": "indra12323424"
    })
       .expect(200)
       .end((err, res) => {
           expect(res.body.result).equal(true)
            done()
       }) 
   })



});


