import Header from './Header'
import Footer from './Footer'

function Layout({ children, theme, toggleTheme }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout