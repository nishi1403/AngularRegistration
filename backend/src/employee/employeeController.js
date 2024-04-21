const employeeModel = require("./employeeModel");

const createUserControllerFn =async(req,res)=>{
    try {

        const body=req.body
        const employeeModelData= new employeeModel()
        employeeModelData.fullname=body.fullname
        employeeModelData.email=body.email
        employeeModelData.password=body.password
        console.log(body)
        await employeeModelData.save()

        res.status(200).send({
            "status":true,"message":"User created successfully"
        })
        

       
        
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports={
    createUserControllerFn
};