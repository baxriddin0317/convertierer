import Arrow from './Icons/Arrow';
import InfoCard from './components/InfoCard';
import Output from './components/Output';


function App() {
  return (
    <main className='pt-16'>
      {/* title */}
      <section className='px-4'>
        <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-5xl text-center'>
         Never type again
        </h1>
        <p className='font-inter text-white md:text-lg lg:text-2xl font-bold text-center  mt-3'>
          Turn 1000 PDFs into 1 Excel with 3 clicks
        </p>

        <div className='flex items-center justify-center relative gap-6 mt-9'>
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
      <div className='flex justify-end items-end mr-4 gap-4 md:gap-9 mt-2'>
        <img src="check.png" alt="" />
        <div className='text-white text-xxs space-y-2'>
          <p>
          Your files are processed and deleted securely.
          </p>
          <p>
          You hereby agree to the Terms of Use and the Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
