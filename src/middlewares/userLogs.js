const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, './logs/userLogs.txt');


function userLogs (req, res, next) {
    fs.appendFileSync(logFile, 'El usuario ingreso a la ruta: ' + req.url + '\n');
    
    
    next();
};

module.exports = userLogs;