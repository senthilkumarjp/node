const express = require('express');
const router = express.Router();
const Alien = require('../models/schema');

router.get('/',async(req,res)=>{
    // console.log('get')
    // res.send('get')
    const aliens = await Alien.find();
    res.json(aliens);
})

router.get('/:id',async(req,res)=>{
 
    const aliens = await Alien.findById(req.params.id);
    res.json(aliens);
})


// setTimeout(() => {
//     console.log('asdasafs');
// }, 3000);



router.post('/', async(req,res)=>{
    const alien = await new Alien({
        name:req.body.name,
        age:req.body.age
    })
    alien.save();
    res.json("added success");
})


router.put('/:id', async(req,res)=>{
 
    const aliens = await Alien.findById(req.params.id);
    aliens.name = req.body.name;
    aliens.age=req.body.age;
aliens.save();
res.json("update success");    
})


router.delete('/:id',async (req,res)=>{
 await Alien.findByIdAndDelete(req.params.id);
//    res.json(alien);
res.json("deleted success")

})
module.exports = router;