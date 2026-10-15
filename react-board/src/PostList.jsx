import PostItem from './PostItem.jsx'

function postList({ posts }) {

    return (
        <div>
            {}
            {posts.map((post) => (

                <PostItem key={post.id} post={post}/>

            ))}
        </div>
    )
}

export default postList