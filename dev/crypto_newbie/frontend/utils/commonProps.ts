import { getSession } from "../../common/getSession";
import * as utils from "../../backend/DButils";
import { User } from "../../backend/entity/User";

// Type créer pour passer props à divers components pour éviter de répéter du code

export type GreetingProps = {
    isLoggedIn: boolean;
    firstName?: string;
    lastName?: string;
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
    const connection = await utils.getConnection()
    const session = await getSession(req, res);
    const userRepo = connection.manager.getRepository<User>("User");
    const user = await userRepo.findOne({ id: session?.user?.id });
    const accountAmount = await user?.accountAmount;

    return {
        props: {
            // ?.user.? pour s'assurer de ne pas crash si user(session) est undefined
            isLoggedIn: !!session?.user?.id,   // !! pour s'assurer que ce soit un bool
            firstName: session?.user?.firstName ?? null,
            lastName: session?.user?.lastName ?? null,
            email: session?.user?.email ?? null,
            accountType: session?.user?.accountType ?? null,
            accountAmount: accountAmount ?? null,
            dateOfBirth: session?.user?.dateOfBirth ?? null
        },
    };
}