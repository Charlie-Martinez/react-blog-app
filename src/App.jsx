import { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import BlogPostsPage from './pages/BlogPostsPage'
import IndividualPostPage from './pages/IndividualPostPage'
import ContactPage from './pages/ContactPage'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          <Layout theme={theme} toggleTheme={toggleTheme}>
            <Routes>
              <Route path="/" element={<BlogPostsPage theme={theme} />} />
              <Route path="/post/:postId" element={<IndividualPostPage  theme={theme} />} />
              <Route path="/contact" element={<ContactPage theme={theme} />} />
            </Routes>
          </Layout>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App