import { useRouter } from 'next/router'
import React from 'react'

function Setting() {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <p>This is the Setting data of the :{router.query.user}</p>
        </div>
    )
}

export default Setting