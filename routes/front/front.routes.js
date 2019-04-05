/*
    -- Imports --
*/
    const express = require('express');
    const frontRouter = express.Router();
    
//

/*
    -- Configuration --
*/
class FrontRouterClass {

    constructor() {}

    init(){
        this.routes();
        return frontRouter;
    }

    routes(){
        frontRouter.get('/', (req, res) => {
            res.render('index', { connected: false});
            

        });   

        frontRouter.get('/deezer', (req, res) => {
            res.render('deezer', { connected: false});
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        });      
    }
}
    
//

/*
    -- Exports --
*/
    module.exports = {FrontRouterClass};