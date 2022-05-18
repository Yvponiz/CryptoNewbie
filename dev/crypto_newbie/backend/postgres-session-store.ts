import { SessionData, SessionStore } from "next-session/lib/types";
import { Session } from "./entity/Session";
import * as utils from "./DButils";

// MemoryStore pour, pour créer un et garder un cookie(session)
// Cookie est conservé sur pgadmin
// Source: https://github.com/hoangvvo/next-session/blob/master/src/memory-store.ts

export default class MemoryStore implements SessionStore {

    async get(sid: string): Promise<SessionData | null> {
        let connection = await utils.getConnection(); 
        const sessionRepository = connection.getRepository<Session>("Session");
        const sess = (await sessionRepository.findOne({ uuid: sid })).data;
        
        if (sess) {
            const session = JSON.parse(sess, (key, value) => {
                if (key === "expires") return new Date(value);
                return value;
            }) as SessionData;
            if (
                session.cookie.expires &&
                session.cookie.expires.getTime() <= Date.now()
            ) {
                await this.destroy(sid);
                return null;
            }
            return session;
        }
        return null;
    }

    async set(sid: string, sess: SessionData) {
        let connection = await utils.getConnection();
        const sessionRepository = connection.getRepository<Session>("Session");
        let sessionEntity = await sessionRepository.findOne({ uuid: sid });

        if (!sessionEntity) {
            sessionEntity = new Session();
        }

        sessionEntity.uuid = sid
        sessionEntity.data = JSON.stringify(sess)
        await sessionRepository.save(sessionEntity)
    }

    async destroy(sid: string) {
        let connection = await utils.getConnection();
        const sessionRepository = connection.getRepository<Session>("Session");
        let sessionEntity = await sessionRepository.findOne({ uuid: sid });
        await sessionRepository.remove(sessionEntity);
    }

    async touch(sid: string, sess: SessionData) {
        return this.set(sid, sess)
    }
}