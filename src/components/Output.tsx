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
    <section className='max-w-7xl mx-auto px-4 lg:px-5 mt-14 lg:mt-20'>
      <div className='flex flex-col md:flex-row items-stretch gap-12 lg:gap-16'>
        <ChoosePdf pdfFiles={pdfFiles} setPdfFiles={setPdfFiles} />
        <ChooseExcel xlsFile={xlsFile} setXlsFile={setXlsFile} />
      </div>
      <button onClick={handleSubmit} className='h-12 max-w-[411px] w-full mx-auto rounded-full bg-white flex items-center justify-center text-sm md:text-base font-bold text-brand-black-100 py-2.5 mt-8'>
        Download Final Output
      </button>
    </section>
  )
}

export default Output