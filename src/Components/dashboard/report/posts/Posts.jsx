import React, { useEffect, useState } from 'react'
import Header from '../../../header'
import "../reports.css"
const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log({ json });
                setPosts(json);
            })
    }, [shouldRefresh]
    );
    return (
        <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
                <div className='carrierBox'>
                    <div className='topbar'>

                    </div>
                    <div className='mainDiv'>
                        {posts.map((post) => {
                            return <div key={post.id} style={{ "paddingBottom": "10px" }}> <h2> {post.title}</h2> <p>{post.body}</p> </div>
                        })}
                    </div>

                    <button onClick={(e) => {
                        setShouldRefresh(!shouldRefresh);
                    }} >Refresh</button>


                </div>
            </div>

        </div>
    )
}

export default Posts