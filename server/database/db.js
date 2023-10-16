import mongoose from "mongoose";

const dbConnection = async () => {

    const DB_URI = "mongodb+srv://admin:123@cluster0.tqss7fm.mongodb.net/job?retryWrites=true&w=majority"
    try{

        await mongoose.connect(DB_URI, { useUnifiedTopology: true});
        console.log("databse connected successfully");

    }catch(error){
        console.log("Error while connecting the database", error.message);
    }
}

export default dbConnection;