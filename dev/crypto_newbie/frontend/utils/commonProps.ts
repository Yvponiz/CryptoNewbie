import { getSession } from "../../common/getSession";

// Type créer pour passer paramètres à divers components pour éviter de répéter du code

export type GreetingProps = {
    isLoggedIn: boolean; 
    firstName: string;
    lastName: string;
};

export type UserProps = {
    isLoggedIn: boolean;
    firstName: string;
    lastName: string;
    email: string;
    accountType: string;
    accountAmount: number;
    dateOfBirth: string;
};

export default async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    session.views = session.views ? session.views + 1 : 1;
    console.log("Session ID", session.id);
    console.log(req.cookies);
    console.log(session.user);
    return {
        props: {
            // ?.user.? pour s'assurer de ne pas crash si user(session) est undefined
            isLoggedIn: !!session?.user?.id,   // !! pour s'assurer que ce soit un bool
            firstName: session?.user?.firstName ?? null,
            lastName: session?.user?.lastName ?? null,
            email: session?.user?.email ?? null,
            accountType: session?.user?.accountType ?? null,
            accountAmount: session?.user?.accountAmount ?? null,
            dateOfBirth: session?.user?.dateOfBirth ?? null
        },
    };
}