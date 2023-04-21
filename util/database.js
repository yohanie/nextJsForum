import { MongoClient } from "mongodb";
import {id, ps} from "./user.js"

const url = `mongodb+srv://${id}:${ps}@cluster0.udt5qhf.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true }
let connectDB;
try{
    if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
      global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
  } else {
    connectDB = new MongoClient(url, options).connect()
  }
}catch(e){
    console.log("db연결 에러",e)
}

  
  export { connectDB }