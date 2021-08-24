const {expect} = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Task Api Testing ', () => {

    it('should create a task', (done) => {
        request(app)
        .post('/api/task')
        .send({"title": "Typescript Task"})
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI1MTAyMTQzNDgxYjI0Njg3OWZiOWYiLCJpYXQiOjE2Mjk4MTg5MTksImV4cCI6MTYyOTkwNTMxOX0.Fj90YZwiOUbOETrXyCm0c_m4r7DFyX6ZpYpoDQlMs54')
        .expect(200) 
        .end((err, res) => {
            expect(res.body.result).equal(true)
            done()
        })
   });

   it('Get all task', (done) => {
    request(app)
    .get('/api/task')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI1MTAyMTQzNDgxYjI0Njg3OWZiOWYiLCJpYXQiOjE2Mjk4MTg5MTksImV4cCI6MTYyOTkwNTMxOX0.Fj90YZwiOUbOETrXyCm0c_m4r7DFyX6ZpYpoDQlMs54')
    .expect(200)
    .end((err, res) => {
        expect(res.body.result).equal(true)
        done()
    })
    })

    
    it('Delete a task', (done) => {
        request(app)
       .delete('/api/task?id=61251de101a3712c8cab292b')
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI1MTAyMTQzNDgxYjI0Njg3OWZiOWYiLCJpYXQiOjE2Mjk4MTg5MTksImV4cCI6MTYyOTkwNTMxOX0.Fj90YZwiOUbOETrXyCm0c_m4r7DFyX6ZpYpoDQlMs54')
       .expect(200)
       .end((err, res) => {
           expect(res.body.result).equal(true)
           done()
       }) 
   })

   it('Get all task by user id', (done) => {
    request(app)
    .get('/api/task/6125102143481b246879fb9f')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI1MTAyMTQzNDgxYjI0Njg3OWZiOWYiLCJpYXQiOjE2Mjk4MTg5MTksImV4cCI6MTYyOTkwNTMxOX0.Fj90YZwiOUbOETrXyCm0c_m4r7DFyX6ZpYpoDQlMs54')
    .expect(200)
    .end((err, res) => {
        expect(res.body.result).equal(true);
        done()
    })
    })

});


