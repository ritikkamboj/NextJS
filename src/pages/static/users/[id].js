import React from "react";

function id(props) {

    console.log("data", props.data);

    return <div>jai shree ram</div>;
}

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
        fallback: false,
    }

}

// to get which user id clicked by user , getstaticProp function provide us conetext
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();

    return {
        props: {
            data: data
        }
    }
};

export default id;
