import { getSession } from "../../common/getSession";

export type CommonProps = {
    isLoggedIn: boolean ,
    firstName: string
};

export default async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    session.views = session.views ? session.views + 1 : 1;
    console.log("Session ID", session.id)
    console.log(req.cookies)
    console.log(session.user)
    return {
        props: {
            firstName: session?.user?.firstName ?? null,
            isLoggedIn: !!session?.user?.id   // !! pour s'assurer que ce soit un bool et ?.user.? pour s'assurer de ne pas crash si user(session) est undefined
        },
    };
}