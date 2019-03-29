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
    }
}
    
//

/*
    -- Exports --
*/
    module.exports = {FrontRouterClass};