// import HTTP_Messages from "../HttpCodes/httpEnum.js";
import {DbHealthCheckService} from '../services/healthCheck.js'


export const DbHealthCheck = async (req , res) =>{
        
    if(Object.keys(req.body).length != 0 || Object.keys(req.query).length != 0){
        res.status(400).send();
    } else {
        res.set('Cache-Control', 'no-cache');
        if(req.method == 'GET'){
            try{
                await DbHealthCheckService();
                res.status(200).send();
            }catch (err){
                res.status(503).send();
            } 
        }else{
            res.status(405).send();
        }
    }
}



