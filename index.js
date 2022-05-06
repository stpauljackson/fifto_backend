import express from 'express';
import cors from 'cors';
import {signup,login,save,products} from './controller.js'
import './mongoconnect.js'
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./build/index.html'))
})

app.post('/signup',signup)
app.post('/login',login)
app.post('/save',save)
app.get('/products',products)
const port = process.env.PORT||5000
app.listen(port,()=> {
    console.log('listening')
})
