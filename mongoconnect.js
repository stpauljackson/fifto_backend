import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/users")

// mongoose.connection.once('open',()=>{
//     console.log("connected to MongoDB")
// })

const mongourl = 'mongodb+srv://sushantkumar:3fuNF8vMbMn2QFtH@cluster0.onrl6.mongodb.net/users?retryWrites=true&w=majority'

//'mongodb://localhost/db'

mongoose.connect(mongourl, 
    {
        useNewUrlParser:true ,
        useUnifiedTopology:true
    },
    err =>
    {
        if(err)
        console.log(err)
        else
        console.log('connected')
    }
    );

