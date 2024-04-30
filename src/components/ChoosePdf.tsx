import React, { useState } from 'react'

interface Props {
  setPdfFiles: (files: File[]) => void;
  pdfFiles: File[];
}

const ChoosePdf = ({setPdfFiles, pdfFiles}: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setPdfFiles(newFiles);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const acceptedTypes = ['application/pdf']; // Specify accepted file types (only PDF)
      // const isValidFileType = Array.from(files).every((file: File) => {
      //   const fileType = file.type;
      //   return acceptedTypes.includes(fileType);
      // });
      const validFiles = Array.from(files).filter((file: File) =>
        acceptedTypes.includes(file.type)
      );

      if (validFiles) {
        setPdfFiles(validFiles);
        console.log('selected file: ', { target: { files: [files[0]] } });
      } else {
        alert('Please drop only PDF files.');
      }
    }
  };

  return (
    <div 
      className={`bg-transparent rounded-lg w-full border-[3px] border-dashed py-8 px-2 ${
        isDragging || pdfFiles.length>0 ? 'border-blue-600' : 'border-brand-gray-100'
        }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-between h-full w-full text-center text-brand-black-100">
        <div className='flex flex-col items-center'>
          <img className='h-[78px] object-cover' src='file.png' alt='file' />
          {!(pdfFiles.length > 0) && <p className="mt-8 text-sm md:text-base">Select PDF files or drag and drop them here</p>}
          <div className='flex mt-3 flex-col text-sm'>
            {pdfFiles.length > 0 && pdfFiles.map((pdf,idx) => (
              <p key={idx}>{pdf.name}</p>
            ))}
          </div>
        </div>
        <label htmlFor="fileInput" className="h-12 max-w-[411px] w-full rounded-full bg-white flex items-center justify-center cursor-pointer text-sm font-bold md:text-base py-2.5 mt-7 lg:mt-4">
          <span>Choose a file (.pdf)</span>
        </label>
      </div>
      <input
        id="fileInput"
        type="file"
        className="sr-only"
        accept=".pdf"
        multiple
        onChange={handleChange}
      />
    </div>
  )
}

export default ChoosePdf