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
    const http = require('http');
    const socketIo = require('socket.io');

    
    //Inner
    const mainRouter = require('./routes/main.routes.js');
//

/*
    -- Configuration --
*/
    const server = express();
    const expressServer = http.createServer(server);
    const io = socketIo(expressServer);
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

             // Setup Socket.io
            io.on('connection', (socket) => {
                console.log('a user connected');
                socket.on('disconnect', () => { 
                    console.log('user disconnected')
                })
              });

            // Launch the server
            this.launch();

        }

        launch(){
            expressServer.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
        }

    }
//

/*
    -- Start (let's go !) --
*/
    new ServerClass().init();


