import Link from "next/link";
import React, { useEffect, useState } from "react";

// we want all users name on this page

function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            // console.log(data[0].name);

            setData(data);
        }

        fetchData();
    }, []);

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
