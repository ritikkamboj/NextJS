import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";




const fetcher = (...args) => fetch(...args).then(res => res.json())

function Index() {


    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    console.log(data);

    if (error) {
        return <h1>Error in the loading of details </h1>
    }

    if (!data) {
        return <h1>Data Loading...</h1>
    }


    return (
        <div>
            This is the root file opened when we fetch the data from API
            <ul>
                {data.map((user) => (
                    <Link href={`/customers/${user.id}`} key={user.id}>
                        <div>{user.name}</div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Index;
