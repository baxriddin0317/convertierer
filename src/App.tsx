import Arrow from './Icons/Arrow';
import InfoCard from './components/InfoCard';
import Output from './components/Output';


function App() {
  return (
    <main className='flex flex-col gap-20 lg:gap-10 main justify-between py-4'>
      {/* title */}
      <section className='px-4'>
        <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-5xl text-center'>
         Never type again
        </h1>
        <p className='font-inter text-white md:text-lg lg:text-2xl font-bold text-center  pt-3'>
          Turn 1000 PDFs into 1 Excel with 3 clicks
        </p>

        <div className='flex items-center justify-center relative gap-6 pt-5'>
          <div className='relative left-0 w-20 h-[78px]'>
            <img className='absolute object-contain w-full h-full z-10 left-0' src='/file.svg' alt='file' />
            <img className='absolute object-cover w-full h-full left-4 z-40' src='/file.png' alt='file' />
          </div>
          <img className='' src='/excel.svg' alt='file' />

          <span className='absolute left-1/2 z-40 -translate-x-4 top-full -translate-y-2.5'>
            <Arrow />
          </span>
        </div>
      </section>
      {/*  */}
      <InfoCard />
      {/*  */}
      <Output />
    </main>
  );
}

export default App;
