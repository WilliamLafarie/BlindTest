/*
    -- Imports --
*/
    // Server NodeJs
    require('dotenv').config();
    const express = require('express');
    const ejs = require('ejs');
    const path = require('path');

    //Inner
    const mainRouter = require('./routes/main.routes.js');
//

/*
    -- Configuration --
*/
    const server = express();
    const port = process.env.PORT;

    class ServerClass { 
        init(){
            // Config du dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            // Config du moteur de rendu
            server.set( 'view engine', 'ejs' );

            // Configurer les routes
            server.use('/', mainRouter);

            // Lancer le serveur
            this.launch();
            console.log('help');
        }

        launch(){
            server.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
        }

    }
//

/*
    -- Start (let's go !) --
*/
    new ServerClass().init();


