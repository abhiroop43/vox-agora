import {Server as NetServer} from "http";
import {Server as ServerIO} from "socket.io";
import {NextApiRequest} from "next";
import {NextAPiResponseServerIo} from "@/types";

export const config = {
    api: {
        bodyParser: false
    }
};

const ioHandler = (req: NextApiRequest, res: NextAPiResponseServerIo) => {

    // if a socket server already exists, we should not create one
    if(res.socket.server.io) {
       res.end();
    }

    const path = '/api/socket/io';
    const httpServer: NetServer = res.socket.server as any;
    res.socket.server.io = new ServerIO(httpServer, {
        path,
        addTrailingSlash: false
    });
    res.end();
}

export default ioHandler;
