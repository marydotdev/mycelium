import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
        <>
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='grow'>{children}</main>
            <Footer />
        </div>
        </>
    )
}