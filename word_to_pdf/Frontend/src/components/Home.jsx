import React, { useState } from 'react';
import { FaFileWord } from 'react-icons/fa6';
import axios from 'axios'; // Don't forget to import axios

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convert, setConvert] = useState("");
const [downloadError,setDownloadError]=useState("");
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handelSubmit = async(event) => {
        if (!selectedFile) {
            setConvert("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:3000/convertfile", formData, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf");
            document.body.appendChild(link); // Append the link to the document body
            link.click(); // Simulate click to trigger download
            document.body.removeChild(link); // Remove the link from the document body after download
            setSelectedFile(null);
            setConvert("Conversion successful!"); // Set success message
        } catch (error) {
            console.error(error);
            setConvert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40'>
            <div className='flex h-screen items-center justify-center'>
                <div className='border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-green-500 rounded-lg shadow-md'>
                    <h1 className='text-3xl font-bold text-center'>Convert word to PDF</h1>
                    <p className='text-sm text-green-500 text-center mt-2 mb-5'>
                        Easily convert word file to pdf format online, without having to download any software.
                    </p>
                    <div className='flex flex-col items-center space-y-4 w-full'>
                        <input type="file" accept='.doc,.docx' className='hidden' onChange={handleFileChange} id='FileInput' />
                        <label htmlFor="FileInput" className='w-full flex items-center justify-center px-4 py-6 bg-text-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-green-800 hover:bg-green-600 duration-300'>
                            <FaFileWord />
                            <span className='text-2xl'>{selectedFile ? selectedFile.name : 'Choose File'}</span>
                        </label>
                        <button onClick={handelSubmit} disabled={!selectedFile} className='text-white bg-blue-500 disabled:bg-gray-400 disabled:pointer-events-none hover:bg-blue-700 duration-300 font bold px-4 py-2 rounded-md'>
                            Convert File
                        </button>
                        {convert && <p className="text-red-500">{convert}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
