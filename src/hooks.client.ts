import skio from "$lib/socket.js";
import type { Server as SocketIOServer } from "socket.io";
import type { Socket } from "socket.io-client";

if (!skio.started()) {
  skio
    .setup("http://socket-io.desdeo-test.svc.cluster.local:3001", {
      cors: {
        //origin: "http://localhost:5173",
        origin: "http://0.0.0.0:3000",
        credentials: true,
        transports: ["websocket"],
        "force new connection": true,
      },
    })
    .then((socket: Socket | SocketIOServer) => {
      (socket as Socket).on("connect", () => {
        if (socket) {
          socket.on("message", (message) => {
            console.log(message);
          });
        }
      });
    });
}


