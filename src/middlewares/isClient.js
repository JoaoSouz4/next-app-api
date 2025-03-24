import Client from "../model/client.js";

export async function isClient(req, res, next){

    try { 
        const { name, lastname } = req.body;
        
        const client = await Client.findOne({name: name.toUpperCase().trim(), lastname:lastname.toUpperCase().trim()});

        if(client){
            return res.status(409).json({
                sucess: false,
                message: `Já existe um cliente ${name} ${lastname}`
            })
        } 

        next();
        

    } catch(errors){
        res.status(500).json({
            success: false,
            message: 'Erro interno de servidor',
            data: errors
        });
        console.log(errors)
    }
}