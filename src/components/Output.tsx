import React, { useState } from 'react'
import ChoosePdf from './ChoosePdf'
import ChooseExcel from './ChooseExcel'

const Output = () => {
  const [xlsFile, setXlsFile] = useState<File | null>(null); // Define type for excelFile
  const [pdfFiles, setPdfFiles] = useState<File[]>([]); // Define type for pdfFile

  const handleSubmit = () => {
    console.log(pdfFiles, xlsFile);
  }

  return (
    <section className=''>
      <div className='max-w-7xl mx-auto px-4 lg:px-5'>
        <div className='flex flex-col md:flex-row items-stretch gap-12 lg:gap-16'>
          <ChoosePdf pdfFiles={pdfFiles} setPdfFiles={setPdfFiles} />
          <ChooseExcel xlsFile={xlsFile} setXlsFile={setXlsFile} />
        </div>
        <div className='pt-8'>
          <button onClick={handleSubmit} className='h-12 max-w-[411px] w-full mx-auto rounded-full bg-white flex items-center justify-center text-sm md:text-base font-bold text-brand-black-100 py-2.5'>
            Download Final Output
          </button>
        </div>
      </div>

      <div className='flex justify-center md:justify-end items-end md:mr-4 gap-4 md:gap-9 pt-2'>
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
    </section>
  )
}

export default Output