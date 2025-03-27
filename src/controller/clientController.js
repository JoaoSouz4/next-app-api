import Client from '../model/client.js';

class ClientController {
    static async create(req, res) {
      const { name, lastname, phone1, phone2 } = req.body;
  
      try {
        const client = await Client.create({
          name: name.toUpperCase(),
          lastname: lastname.toUpperCase(),
          phone1: phone1,
          phone2: phone2,
        });
        res.status(201).json({
          message: 'Client created successfully',
          data: client
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error inserting client',
          error: error.message
        });
      }
    }

    static async read(req, res){

      try {
        const clients = await Client.find({});
        res.status(200).json({
        message: 'lista de clientes carregada com sucesso',
        isSuccess: true,
        data: clients
      })
        
      } catch (error) {
        console.log(error);
        res.status(400).json({
          message: 'falha interna de servidor',
          isSuccess: true,
        })
      }
    }

    static async delete(req, res){
      try {
        const { id } = req.params;

        const deleteResult = await Client.deleteOne({_id: id});

        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            message: "Cliente não encontrado.",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Cliente excluído com sucesso.",
        });

      } catch (error) {
        res.status(500).json({
          success: false,
          message: "não foi possível concluir a operação",
          data: error.message
        })
      }
    }
}
  
  export default ClientController;
  
