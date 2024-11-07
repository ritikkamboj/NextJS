import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ParticularUser() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);

  const [parCustomer, setParCustomer] = useState("");

  useEffect(() => {
    async function fetchById(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      // console.log(data);
      // console.log(data[0].name);

      // setData(data);
      setParCustomer(data);
    }

    fetchById(router.query.id);
  }, [router.query.id]);

  return (
    <div>
      <p>
        After setting the proper router and link, now it will print the details
        of : {parCustomer?.name}
      </p>
      <p>Email of the person clicked is : {parCustomer?.email}</p>
    </div>
  );
}

export default ParticularUser;
