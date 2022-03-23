import { Connection, ConnectionOptions, createConnection, getConnectionManager } from "typeorm"
import { Utilisateur } from "../../src/entity/Utilisateur"

const connectionManager = getConnectionManager()

// const connection = createConnection({
//     type: "postgres",
//     url: process.env.DATABASE_URL || "postgres://yvan:AAAaaa111@localhost:5432/cryptonewbie",
//     extra: {
//         ssl: process.env.NODE_ENV === 'production', rejectUnauthorized: false
//     },
//     entities: [ //table
//         Utilisateur
//     ],
//     synchronize: true, //true pour créer la bd, false pour lier
//     logging: true
// })

export async function getConnection(name: string = "default"): Promise < Connection > {
    const CONNECTION_NAME: string = name;
    let connection: Connection;
    const hasConnection = connectionManager.has(CONNECTION_NAME);
    if(hasConnection) {
        connection = connectionManager.get(CONNECTION_NAME);
        if (!connection.isConnected) {
            connection = await connection.connect();
        }
    } else {

        const connectionOptions: ConnectionOptions = {
            type: "postgres",
            url: process.env.DATABASE_URL || "postgres://yvan:AAAaaa111@localhost:5432/cryptonewbie",
            extra: {
                ssl: process.env.NODE_ENV === 'production', rejectUnauthorized: false
            },
            entities: [ //table
                Utilisateur
            ],
            synchronize: true, //true pour créer la bd, false pour lier
            logging: true
        }
      connection = await createConnection(connectionOptions);
    }
    return connection;
}




// export const getConnection = () => {
//     return connection
// }
