import { useState, useEffect } from 'react'
import axios from 'axios'

function CommentSection({ postId }) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [author, setAuthor] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                setComments(response.data)
                setLoading(false)
            })
            .catch(e => {
                console.error('Error fetching comments:', e)
                setLoading(false)
            })
    }, [postId])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newComment.trim() && author.trim()) {
            axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                postId: parseInt(postId),
                name: author,
                body: newComment,
                email: 'user@example.com'
            })
                .then(response => {
                    setComments([...comments, response.data])
                    setNewComment('')
                    setAuthor('')
                })
                .catch(e => console.error('Error posting comment:', e))
        }
    }

    if (loading) return (
        <div className="py-8 flex justify-center">
            <div className="text-xl font-bold">Loading comments...</div>
        </div>
    )

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <form onSubmit={handleSubmit} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Add a Comment</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-600 text-black"
                    required
                />
                <textarea
                    placeholder="Your Comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows="3"
                    className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-600 text-black"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit Comment
                </button>
            </form>

            <div>
                <h4 className="text-lg font-semibold mb-3">Comments</h4>
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="bg-gray-50 p-3 rounded mb-2">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span className="font-semibold">{comment.name}</span>
                                <span>{comment.email}</span>
                            </div>
                            <p className="text-gray-700">{comment.body}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CommentSection