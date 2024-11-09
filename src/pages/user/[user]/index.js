import { useRouter } from "next/router";
import React, { useEffect } from "react";

const useUser = () => {
    return {
        user: { name: 'ritik' },
        loading: false,
    };
};
function Index() {
    const router = useRouter();
    const user = useUser();

    useEffect(() => {
        if (user.user === null) {
            router.replace("/");
        }
    }, [user.user]);

    return (
        <div>
            <p>
                his is the root page, for [user] folder, if after reaching till [user]
                folder , we not mention any file{" "} working
            </p>
            <button
                onClick={() =>
                    router.push({
                        pathname: `/user/[user]/setting`,
                        query: { user: router.query.user },
                    })
                }
            >
                Click for settings
            </button>
            <button onClick={() => router.replace(`/`)}>Home Page</button>
            <button onClick={() => router.reload()}>Reload</button>
        </div>
    );
}

export default Index;
