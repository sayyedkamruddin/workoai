const express = require('express');
const userController = require('../controllers/uController');
const router = express.Router();
let auth=( req,res,next )=>{

    try {
        
    
    let a="d29ya28uYWk6d29ya28="
    console.log(req.headers.authorization.includes(a));
    let ress=req.headers.authorization.includes(a)
    if(ress){
        next()
    }
    else{

        res.status(500).json({ message:"Inavlid User" });

    }

} catch (error) {
    res.status(500).json({ message:error.message });
        
}
  }
router.get('/',auth, userController.getAllUsers);
router.get('/:id',auth, userController.getUserById);
router.post('/',auth, userController.createUser);
router.put('/:id',auth, userController.updateUser);
router.patch('/:id',auth, userController.updateUser)
router.delete('/:id',auth, userController.deleteUser);

module.exports = router;
