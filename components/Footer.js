import Link from "next/link"
  
export default function Footer() {
    return (
      <footer className="bg-stone-100 w-full text-center py-4">
        <Link href="https://mary.dev" className=''>
          <a>Made by Mary</a>  
        </Link>
      </footer>
    )
  }
  