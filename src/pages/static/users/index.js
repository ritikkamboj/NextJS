import React from 'react'

function Index(props) {
    return (
        <div>
            <p> Static site Rendering </p>

            {
                props.data.users.map(user => (<li key={user.id}>{user.firstName} {user.lastName}</li>))
            }
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json();

    return {
        props: {
            data: data
        }
    }


}

export default Index


