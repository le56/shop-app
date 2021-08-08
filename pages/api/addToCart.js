import connectDB from './../../Utils/ConnectDB'
import Users from './../../models/userModel'
import auth from './../../middleware/auth'
connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await addToCart(req, res)
            break;
    }
}


const addToCart = async (req, res) => {
    try {
        const product = req.body
        const result = await auth(req, res)
        await Users.findOneAndUpdate({_id: result.id}, {cart: product})

        res.json({ msg: "Update Success!"})
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }   
}