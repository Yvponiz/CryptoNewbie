import { SessionData, SessionStore } from "next-session/lib/types";
import { Session } from "./entity/Session";
import * as utils from "./DButils";


// MemoryStore pour, pour créer un et garder un cookie(session)
// Cookie est conservé sur pgadmin
// Source: https://github.com/hoangvvo/next-session/blob/master/src/memory-store.ts

export default class MemoryStore implements SessionStore {

    async get(sid: string): Promise<SessionData | null> {
        await utils.getConnection();
        const sess = (await Session.findOne({ uuid: sid })).data;
        console.log("GET", sid)
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
        await utils.getConnection();
        let sessionEntity = await Session.findOne({ uuid: sid });

        if (!sessionEntity) {
            sessionEntity = new Session();
        }

        sessionEntity.uuid = sid
        sessionEntity.data = JSON.stringify(sess)
        await sessionEntity.save()
    }

    async destroy(sid: string) {
        await utils.getConnection();
        let sessionEntity = await Session.findOne({ uuid: sid });
        await sessionEntity.remove();
        console.log("DESTROY", sid)
    }

    async touch(sid: string, sess: SessionData) {
        console.log("TOUCH", sid, sess)
        return this.set(sid, sess)
    }
}