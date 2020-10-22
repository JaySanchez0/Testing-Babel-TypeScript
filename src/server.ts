import express,{Express,Request,Response} from 'express';

const server:Express = express();

server.get("/hello",(req:Request,res:Response)=>{
    res.header("Content-Type","text/plain");
    res.send("Hola");
});

export default server;