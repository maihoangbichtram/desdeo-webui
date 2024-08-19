import { Server } from 'socket.io';
import serverEvents from './serverEvents.js';
import socketEvents from './socketEvents.js';

export default (options = {}) => ({
    name: 'socket.io',
    configureServer(server) {
        // initiate default options
        const defaults = { serverEvents, socketEvents }

        // merge defaults with options
        options = Object.assign(defaults, options);

        // create io server
        const io = new Server(server.httpServer);

        // pass io server to serverEvents
        options.serverEvents(io);
    }
})