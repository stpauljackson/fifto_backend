import express from 'express';
import cors from 'cors';
import {signup,login,save,products} from './controller.js'
import './mongoconnect.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('./build'))

app.get('/',(req, res) => {
    req.sendFile('./build/index.html')
})
app.post('/signup',signup)
app.post('/login',login)
app.post('/save',save)
app.get('/products',products)

app.listen(5000,()=> {
    console.log('listening')
})
