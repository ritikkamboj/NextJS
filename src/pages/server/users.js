import React from "react";

function Users(props) {
    console.log("props", props);
    console.log(props.data);


    return <div>Server Side Rendering (SSR)
        {
            props.data.users.map(user => (<li key={user.id}>{user.firstName} {user.lastName}</li>))
        }
    </div>;
}

export const getServerSideProps = async () => {
    console.log("This task is going on server ");
    const data = await (await fetch('https://dummyjson.com/users')).json();

    return {
        props: {
            data: data
        }
    }


}

export default Users;
