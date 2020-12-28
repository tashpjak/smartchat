import * as cli from './cli.js'
import server from "./server.js";
import clear from "clear";


const port = process.env.PORT || 3000
async function main() {
    clear();
    await server.listen(port)
    await cli.start()
}

main()