function handleClick() {
  alert('this is temporarily fake check back soon');
}

export default function Hero() {
    return (
      <main className="">
        <div className="max-w-3xl mx-auto pt-36">
          <h1 className="text-center px-4 text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            <span className="">Connected infrastructure for &nbsp;</span>
            <span>
              <span className="">patients</span> &nbsp;
              <span className="">and</span> &nbsp;
              <span className="">providers</span>.
            </span>     
          </h1>

          <div className="relative w-full h-auto max-w-md sm:max-w-lg mx-auto top-24">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative flex justify-center w-full pt-12 z-10">
            <button onClick={handleClick} className="bg-blue-500 px-4 py-2 text-slate-50 rounded-md text-md sm:text-lg md:text-xl font-medium tracking-tighter hover:transform hover:scale-[1.02] transition-all duration-150 hover:shadow-lg">Learn More</button>
          </div>
        </div>
    </main>
    )
  }