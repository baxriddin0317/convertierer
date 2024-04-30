import React from 'react'

const info = [
  {
    id: 1,
    title: "Choose the PDF file (input)",
    text: "Provide the PDF file from which you want to extract data."
  },
  {
    id: 2,
    title: "Choose an Excel (output format) ",
    text: "Provide the Excel file as the format in which your final data shall be structured. "
  },
  {
    id: 3,
    title: "Download your clean data output",
    text: "Receive your input data structured according to your output format."
  },
]

const InfoCard = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 lg:px-5 mt-20 lg:mt-24'>
      <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 bg-white rounded-4xl px-4 sm:px-8 py-7'>
        {info.map(item => (
          <div key={item.id} className='text-brand-black-100'>
            <div className='flex items-center gap-2'>
              <span className='flex items-center justify-center text-xxs w-5 h-5 rounded-full bg-transparent border'>
                {item.id}
              </span>
              <h3 className='text-sm font-bold'>
              {item.title}
              </h3>
            </div>
            <p className='mt-2.5 text-xxs'>
            {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCard