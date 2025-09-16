const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const UserService = require("../services/userService");
const UserServ = new UserService();

const privateKey = fs.readFileSync("C:/Users/Henrico/Desktop/Projetos/ReparaAí/keys/private.key","utf-8")
console.log(privateKey)
class TokenController {
    async login (req, res){
        try{
        const { email, hash_password } = req.body;

        const user = await UserServ.findByEmail(email);
            if(!user)
                return res.status(401).json({
                message: "Invalid credencials"
            })
        const correctPassword = await bcrypt.compare(hash_password, user.hash_password);
            if (!correctPassword) 
                return res.status(401).json({
                erro: "Invalid credencials" 
            });
    
        const token = jwt.sign(
            { id: user.idUser , email: user.email }, privateKey,{ algorithm: "RS256", expiresIn: "1h" });
        
        res.json({ token });
    }
    catch(e){
        res.status(500).json({
             erro: "Internal Error"
             });
        }
    }
}

module.exports = TokenController;