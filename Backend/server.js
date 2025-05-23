
import { app } from "./app.js"
import { logger } from "./logger.js"
import http from "http"
import 'dotenv/config'

export const server = http.createServer(app);

const PORT = process.env.port

//start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});