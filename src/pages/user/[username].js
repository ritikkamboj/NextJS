import { useRouter } from 'next/router';
import React from 'react'

function Username() {

    const { query } = useRouter();
    // console.log(router);
    // console.log(query);



    return (
        <div>
            <p>When path specific file name not exist then {query.username} file loads

            </p>
        </div>
    )
}

export default Username;