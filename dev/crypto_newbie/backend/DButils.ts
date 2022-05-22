import { Connection, ConnectionOptions, getConnectionManager} from "typeorm"
import { User } from "./entity/User"
import { Portfolio } from "./entity/Portfolio";
import { Crypto } from "./entity/Crypto";
import { Transactions } from "./entity/Transactions";
import { Session } from "./entity/Session";
import "reflect-metadata";

// Paramètres de connexion à permettant de se connecter à postgres
// Source: https://stackoverflow.com/a/65317768

const connectionOptions: ConnectionOptions = {
  name: "default",
  type: "postgres",
  url: process.env.DATABASE_URL || "postgres://postgres:AAAaaa111@localhost:5432/cryptonewbie",
  extra: {
    ssl: process.env.NODE_ENV === 'production', rejectUnauthorized: false,
    keepConnectionAlive: true
  },
  entities: [ //tables
    Crypto,
    Transactions,
    Portfolio,
    User,
    Session
  ],
  synchronize: true, //true pour créer la bd, false pour lier
  logging: true
}


// Code pour régler méga problème de connexion
// Source: https://github.com/typeorm/typeorm/issues/6241#issuecomment-643690383

function entitiesChanged(prevEntities: any[], newEntities: any[]): boolean {
  if (prevEntities.length !== newEntities.length) return true;

  for (let i = 0; i < prevEntities.length; i++) {
    if (prevEntities[i] !== newEntities[i]) return true;
  }

  return false;
}

async function updateConnectionEntities(connection: Connection, entities: any[]) {
  if (!entitiesChanged(connection.options.entities, entities)) return;

  // @ts-ignore
  connection.options.entities = entities;

  // @ts-ignore
  connection.buildMetadatas();

  if (connection.options.synchronize) {
    await connection.synchronize();
  }
}

export async function getConnection(): Promise<Connection> {
  const connectionManager = getConnectionManager();

  if (connectionManager.has(connectionOptions.name)) {
    const connection = connectionManager.get(connectionOptions.name); //lien entre connection manager et paramètres dans connectionOptions

    if (!connection.isConnected) {
      await connection.connect();
    }

    if (process.env.NODE_ENV !== 'production') {
      await updateConnectionEntities(connection, connectionOptions.entities);
    }

    return connection;
  }

  return await connectionManager.create({ name: connectionOptions.name, ...connectionOptions }).connect();
}
