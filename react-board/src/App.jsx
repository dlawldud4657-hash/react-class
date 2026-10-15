import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')

      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)})
  }, [])

  if (loading) {
    return (
      <main className="page">
        <p>불러오는 중...</p>
      </main>
    )
  }

  return (
    <main className="page">
      <h1>React 게시판</h1>
      {}
      {posts.map((post) => (
        <article className="post-card" key={post.id}>
          {}
          <span className="post-number">
            게시글 #{post.id}
          </span>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  )
}
  

export default App
