import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler} from '../../../middleware/errorHandler'

export default async function handler(req,res){

    await connectToDB()
    if (req.method ==="POST") {
        const {fname, lname, email, gender} = req.body
    try {    
          // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({success: true, message: 'Email already exists' });
      }
        const addedUser = await User.create({fname, lname, email, gender})
        await addedUser.save()
        res.status(200).json({success: true, addedUser})
    } catch (error) {
        errorHandler(res)
    }
}
    
    else{
        errorHandler(res,405,'This method is not allowed')
    }
}