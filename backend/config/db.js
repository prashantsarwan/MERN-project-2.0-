import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://lalitbisht:9717125730@cluster0.ls8hlxn.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"))
}