import React, { useState } from 'react'

interface Props {
  setXlsFile: (item:File|null) => void,
  xlsFile: File | null
}

const ChooseExcel = ({setXlsFile, xlsFile}: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setXlsFile(file);
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
      const acceptedTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']; // Specify accepted file types (XLS and XLSX)
      const isValidFileType = Array.from(files).every((file: File) => {
        const fileType = file.type;
        return acceptedTypes.includes(fileType);
      });

      if (isValidFileType) {
        setXlsFile(files[0]);
      } else {
        alert('Please drop only XLS or XLSX files.');
      }
    }
  };

  return (
    <div 
      className={`bg-transparent rounded-lg w-full border-[3px] border-dashed py-12 px-2 ${
        isDragging || xlsFile ? 'border-blue-600' : 'border-brand-gray-100'
        }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-between h-full text-center text-brand-black-100">
        <div className='flex flex-col items-center'>
          <img src='excel.svg' alt='file' />
          <p className="mt-8 md:mt-12 text-sm md:text-base">Select an Excel file as the desired output structure or drag and drop it here</p>
          {xlsFile && <p className='text-sm md:text-base mt-3'>
            {xlsFile.name}
          </p>}
        </div>
        <label htmlFor="fileExcel" className="h-12 max-w-[411px] w-full rounded-full bg-white flex items-center justify-center cursor-pointer text-sm font-bold md:text-base py-2.5 mt-7">
        <span>Choose a file (.xls or .xlsx)</span>
        </label>
      </div>
      <input
        id="fileExcel"
        type="file"
        className="sr-only"
        accept=".xlsx, .xls"
        onChange={handleChange}
      />
    </div>
  )
}

export default ChooseExcel