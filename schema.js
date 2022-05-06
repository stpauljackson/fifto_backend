import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:String,
    type:String,
    code:Number,
    img:String,
    price:Number,
    description:String
  })

const UserSchema = new Schema({
  username:String,
  password:String,
})

const User = new mongoose.model('User' , UserSchema);
const Product = new mongoose.model('Product',ProductSchema);
  
export {Product , User};