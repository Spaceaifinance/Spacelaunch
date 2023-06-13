
import mongoose from "mongoose";

const ConnectMongoDB = async (MongoURI)=>{
    mongoose.connect(
        MongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => console.log('Mongo DB Connected Successfully'))
        .catch((err) => {
            console.log(err);
        });
}

export default ConnectMongoDB;