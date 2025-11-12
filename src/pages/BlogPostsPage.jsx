import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function BlogPostsPage({ theme = 'light' }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
            .catch(e => {
                console.error('Error fetching posts:', e)
                setLoading(false)
            })
    }, [])

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-3xl font-bold">Loading...</div>
        </div>
    )

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Blog Posts</h1>
            <div className="space-y-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold mb-3 !text-black">
                            <Link to={`/post/${post.id}`} className="hover:text-blue-600">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="mb-4 !text-black">
                            {post.body.substring(0, 150)}...
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Post ID: {post.id}</span>
                            <span>User ID: {post.userId}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPostsPage