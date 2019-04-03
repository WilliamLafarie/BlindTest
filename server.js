/*
    -- Imports --
*/
    // Server NodeJs
    require('dotenv').config();
    const express = require('express');
    const ejs = require('ejs');
    const path = require('path');
    const bodyParser = require('body-parser');    
    const {Deezer} = require('./services/deezer.js');
    const apiDeezer = new Deezer();

    
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
            // Client's folder config
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            // View engine config
            server.set( 'view engine', 'ejs' );

            // Body-parser
            server.use(bodyParser.urlencoded({ extended: false }))

            // Routes config
            server.use('/', mainRouter);

            // Launch the server
            this.launch();

        }

        launch(){
            server.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
            apiDeezer.getTrack(424972412).then(function(result) {
                console.log(result);
            });
        }

    }
//

/*
    -- Start (let's go !) --
*/
    new ServerClass().init();


