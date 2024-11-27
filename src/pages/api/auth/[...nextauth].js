import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23ligMhUCTsLGyBMrB",
            clientSecret: "6ef221edd29ad4d128cafc94149372cb2ba6f996"
        })
    ]
}

export default NextAuth(authOptions);