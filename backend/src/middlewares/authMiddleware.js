const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const publicKey = fs.readFileSync("C:/Users/Henrico/Desktop/Projetos/ReparaAí/keys/public.key","utf-8");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // "Separe the Bearer and the <token>"

  try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    req.user = decoded;
    next(); //concede the execution to the next middleware or the final route
  } catch (err){
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
