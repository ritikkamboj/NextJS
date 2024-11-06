import { useRouter } from "next/router";
import React from "react";

function Index() {
    const router = useRouter();
    return (
        <div>
            <p>
                his is the root page, for [user] folder, if after reaching till [user]
                folder , we not mention any file{" "}
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
            <button onClick={() => router.push(`/`)}>Home Page</button>
        </div>
    );
}

export default Index;
