var Userdb = require('../model/model')


exports.login = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can't be empty"})
        return
    }

    const user = new Userdb({
        login:req.body.login,
        password:req.body.password,

    })

    user
        .save(user)
        .then(data =>{
            res.redirect('/home')
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error occured while creating a operation"
            })
        })
}
console.log(this.login)

// create and save new user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can't be empty"})
        return
    }

    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        position:req.body.position,
        date:req.body.date,
        gender:req.body.gender,
        status:req.body.status

    })

    user
        .save(user)
        .then(data =>{
            res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error occured while creating a operation"
            })
        })
}

// return users
exports.find = (req,res)=>{


    if(req.query.id){
        const id = req.query.id

        Userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message: `Not found user with id: ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:`Error retriving user with id: ${id}`})
            })

    }else{
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Error Occured while finding information"})
    })
    }
}


exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can't be empty"})
    }
    
    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id} id or user not found`})
        }else{
            console.log(req.query.id)
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: 'Error Update user information'})
    })
}


exports.delete = (req,res)=>{
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Delete user with ${id} id or id not found`})
        }else{
            res.send({
                message: "User was deleted successfully"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({message: `Could not delete user with id: ${id}`})
    })
}

exports.show = (req,res)=>{
        const id = req.query.id
        Userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message: `Not found user with id: ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:`Error retriving user with id: ${id}`})
            })

}
