import { Link } from 'react-router-dom'

function Header({ theme, toggleTheme }) {

    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Blog</h1>
                <nav className="space-x-4 flex items-center">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/post/1" className="hover:text-gray-300">Individual Post</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 rounded bg-gray-700 hover:bg-gray-600"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header