import mongoose from "mongoose";


let isconneted =false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isconneted){
        console.log("mongodb connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isconneted =true;

        console.log("mogodb connctef")
    } catch (error) {
        console.log(error);
    }
}