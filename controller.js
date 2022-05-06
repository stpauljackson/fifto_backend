import bcrypt from 'bcrypt'
import {Product ,User} from './schema.js'

const signup = async (req, res) => {
    const { username, password } = req.body
    try {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password, salt);
        const x = {
            username: username,
            password: hashedpassword
        }
        const user = await User.create(x)
        res.status(201).send(user)
    }
    catch (e) {
        console.log(e)
    }
}
const login = async (req, res) => {

    const { username, password} = req.body
    try{
        const user = await User.find({username})
        const auth = await bcrypt.compare(password, user[0].password )
        if(auth)
        {
            res.status(200).send(user)
        }
        else{
            res.status(404).send()
        }
    }
    catch(err){
        res.status(404).send()
    }
}

const save = (req, res) => {
    const {name,type,code,img,price,description} = req.body
    var obj = {
        name:name,
        type:type,
        code:code,
        img:img,
        price:price,
        description:description
    }
    Product.create(obj, (err, item) => {
        if (err){
            console.log(err)
        }
        else {
            item.save()
            console.log("SAVED TO DATABASE")
            res.status(200).send()
        }
    })
}
const products = async(req, res) => {
    try{
        const result = await Product.find(req.body)
        res.status(200).json(result)
    }
    catch(err){
        res.status(404).send()
    }
    res.end()
}

export { signup, login, save, products} 