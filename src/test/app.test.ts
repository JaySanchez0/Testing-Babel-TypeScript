import request from 'supertest';
import '@babel/polyfill';
import server from '../server';

server.listen(3032,"0.0.0.0",()=>{
    console.log("Run server test");
});

test("Should be accepted",async (done)=>{
    const res = await request(server).get("/hello");
        expect(res.text).toEqual("Hola");
        done();
});

test("Should be accepted 2",async (done)=>{
    const res = await request(server).get("/hello");
        expect(res.text).toEqual("Hola");
        done();
});

test("Should be accepted 3",async (done)=>{
    const res = await request(server).get("/hello");
        expect(res.text).toEqual("Hola");
        done();
});