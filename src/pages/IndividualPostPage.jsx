import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CommentSection from '../components/blog/CommentSection'

function IndividualPostPage({ theme = 'light' }) {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                setPost(response.data)
                return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
            })
            .then(response => {
                setUser(response.data)
                setLoading(false)
            })
            .catch(e => {
                console.error('Error fetching post:', e)
                setLoading(false)
            })
    }, [postId])

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-3xl font-bold">Loading...</div>
        </div>
    )
    if (!post) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-3xl font-bold">Post not found</div>
        </div>
    )

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Link to="/" className={`hover:underline mb-6 block ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>← Back to Blog</Link>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
                <h1 className="text-3xl font-bold mb-4 !text-black">{post.title}</h1>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>By: {user ? user.name : 'Loading...'}</span>
                    <span>Email: {user ? user.email : 'Loading...'}</span>
                </div>
                <p className="whitespace-pre-line mb-6 !text-black">{post.body}</p>

                <div className="flex justify-end">
                    <button
                        onClick={() => setLikes(likes + 1)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
                    >
                        <span>👍</span>
                        <span>{likes}</span>
                    </button>
                </div>
            </div>

            <CommentSection postId={postId} />
        </div>
    )
}

export default IndividualPostPage