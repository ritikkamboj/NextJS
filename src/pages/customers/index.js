import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import Styles from './../../styles/Customer.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json()); // here we can also use single argument , intead of using rest parametres

function Index() {
    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        fetcher
    );
    console.log(data);

    if (error) {
        return <h1>Error in the loading of details </h1>;
    }

    if (!data) {
        return <h1>Data Loading...</h1>;
    }

    return (
        <div>
            This is the root file opened when we fetch the data from API, Client Side
            Rendering ( CLI)
            <ul>
                {data.map((user) => (
                    <Link href={`/customers/${user.id}`} key={user.id}>
                        <div className={Styles.text} >{user.name}</div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Index;
