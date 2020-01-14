function adminCheck (req, res, next) {
    let users = ['Ada', 'Greta', 'Vin', 'Tim'];
    let usuario = req.query.user;
    if(users.indexOf(usuario) !== -1 ){
        next();
    }else{
        res.send('No tienes los privilegios necesarios');
    }

    
};

module.exports = adminCheck;