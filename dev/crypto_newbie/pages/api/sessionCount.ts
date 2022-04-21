import { getSession } from '../../common/getSession';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  session.views = session.views ? session.views + 1 : 1;
  // Also available under req.session:
  // req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.send(
    `In this session, you have visited this website ${session.views} time(s).`
  );
}