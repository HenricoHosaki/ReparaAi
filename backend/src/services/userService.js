const { where } = require ("sequelize");
const User = require ('../models/userModel');

/**
 * @class
 * @method
 * @async
 */
class UserService{
    
        async findAllUsers(){
            return await User.findAll()
        }
    
        async findUserByPk(idUser){
            return await User.findByPk(idUser)
        }
    
        async registerUser(userData){
            return await User.create(userData)
        }
    
        async deleteUser(idUser){
            return await User.destroy({where: {idUser} })
        }
        
        async updateUser(idUser, userData) {
            return await User.update(userData, { where: { idUser } });
    }

         async findByEmail(email) {
            return await User.findOne({ where: { email } });
    }
}

module.exports = UserService;