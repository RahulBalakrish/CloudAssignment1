import sequelize from '../App.js';

export const DbHealthCheckService = async () =>{
    return await sequelize.authenticate();
}
