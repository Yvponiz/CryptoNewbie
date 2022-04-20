// import { SessionData, SessionStore } from "next-session/lib/types";
// import { Session } from "./entity/Session";

// export default class MemoryStore implements SessionStore {
//   store: Map<string, string>;

//   constructor() {
//     this.store = new Map();
//     console.log("CONST", this.store)
//   }

//   async get(sid: string): Promise<SessionData | null> {
//     const sess = this.store.get(sid);
//     console.log("GET", sid)
//     if (sess) {
//       const session = JSON.parse(sess, (key, value) => {
//         if (key === "expires") return new Date(value);
//         return value;
//       }) as SessionData;
//       if (
//         session.cookie.expires &&
//         session.cookie.expires.getTime() <= Date.now()
//       ) {
//         await this.destroy(sid);
//         return null;
//       }
//       return session;
//     }
//     return null;
//   }

//   async set(sid: string, sess: SessionData) {
//     Session.findOne
//     const session = new Session(sid, JSON.stringify(sess))
//     this.store.set(sid, JSON.stringify(sess));
//     console.log("SET", sid, sess)
//   }

//   async destroy(sid: string) {
//     this.store.delete(sid);
//     console.log("DESTROY", sid)
//   }

//   async touch(sid: string, sess: SessionData) {
//     this.store.set(sid, JSON.stringify(sess));
//     console.log("TOUCH", sid, sess)
//   }
// }