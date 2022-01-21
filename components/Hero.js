export default function Hero() {
    return (
      <main className="relative mx-auto max-w-7xl pt-12">
         
        <h1 className="pb-4 md:pb-8 text-center font-extrabold text-stone-800">
          <span className="block text-2xl sm:text-3xl md:text-4xl">Not Your Mother&apos;s</span>{' '}
          <span className="block text-4xl sm:text-5xl md:text-6xl">Magic Mushrooms</span>
        </h1>
  
        <div className="flex justify-center gap-2 items-baseline">
        <p className="text-center font-bold text-md sm:text-lg md:text-xl text-stone-800">
          Introducing Mycelium.
        </p>
        <p className="text-center font-regular text-md text-stone-800">
          Read the post &rarr;
        </p>
        </div>
      <div className="relative text-center">
        <p className="max-w-md mx-auto text-base text-stone-600 mt-2 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We use the medicinal powers of mycelium along with our next-gen AI to create personalized healing supplements tailored to your unique genetic profile.</p>
  
          <div className="w-fit mx-auto pt-8">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-stone-100 bg-stone-800 hover:bg-stone-900">
              Get started
            </a>
          </div>
  
        </div>
    </main>
    )
  }