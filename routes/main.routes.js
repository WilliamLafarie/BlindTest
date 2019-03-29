/*
    -- Imports --
*/

// NodeJS
const {Router} = require('express');
const mainRouter = Router({ mergeParams: true });

// Inner
const {FrontRouterClass}  = require('./front/front.routes.js');


// FrontRouteur
const frontRouter = new FrontRouterClass();
mainRouter.use('/', frontRouter.init());


/* 
    -- Export -- 
*/
module.exports = mainRouter;