import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
        <>
        <div className='max-w-7xl mx-auto flex flex-col h-screen px-2'>
            <Header />
            <main className='grow'>{children}</main>
            <Footer />
        </div>
        </>
    )
}