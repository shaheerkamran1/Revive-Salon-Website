import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import router from "./Routes/UserMsgs.js"
import bodyParser from "body-parser"

const app = express();
const port =  5000;

const connectURL="mongodb+srv://<username>:<password>@cluster0.iwfrbtd.mongodb.net/"
mongoose.connect(connectURL,{useNewURLParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connected with DB"))
.catch((error)=>console.log(error.message))

app.use(bodyParser({limit:"50mb"}))
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('/ContactUs',router)

app.listen(port);