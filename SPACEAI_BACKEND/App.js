// import packages
import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from 'body-parser';
import fileupload from "express-fileupload";
import 'dotenv/config';

// import files
import ConnectMongoDB from "./Config/database";
import userroutes from "./Routes/userroutes";
import adminroute from "./Routes/adminroutes";
const app = express();
app.use(cors())
app.use(express.json());
app.use(fileupload());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/kyc', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '')));
app.use("/admin",adminroute);
app.use("/api" , userroutes);

app.use("/",(req,res)=>{
    return res.send("Server Working!");
});

app.get('*',(req,res)=>{ res.status(500).json({ error : "Bad Request !" }) });

app.listen(process.env.API_PORT, () => {
    console.log(`Server up and running on port ${process.env.API_PORT} and ${process.env.MONGO_URI} !`  )
    // Mongo
    ConnectMongoDB(process.env.MONGO_URI);
    //  WebSocket
});