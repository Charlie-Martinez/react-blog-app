import { useState } from 'react'

function ContactPage({ theme = 'light' }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message but this is just an assignment.')
        setForm({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact Us</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="mb-4">
                    <label className="block mb-2 text-black">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-black">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-black">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactPage