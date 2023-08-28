import React, { useState } from 'react';

const DropdownSelect = () => {
    const [selectedOption, setSelectedOption] = useState('dsa');
    const [facultyName, setFacultyName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    }

    return (
        <div className="flex flex-col items-center pt-10">
            <h2 className="text-2xl mb-4 text-white">Mark Your Attendance here</h2>

            {/* Faculty Name Input */}
            <div className="flex flex-col items-center w-full mb-4">
                <label className="text-lg mb-1 text-white">Please enter your faculty name:</label>
                <div className="flex justify-center w-full">
                    <input
                        type="text"
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}
                        placeholder="Faculty name..."
                        className="text-md p-1 border rounded w-1/3"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col items-center w-full mb-4">
                <label className="text-lg mb-1 text-white">Select the subject name</label>
                <div className="flex justify-center w-full">
                    <select 
                        value={selectedOption} 
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="text-md p-1 border rounded w-1/3"
                    >
                        <option value="dsa">DSA</option>
                        <option value="compiler_design">Compiler Design</option>
                        <option value="daa">DAA</option>
                        <option value="fla">FLA</option>
                    </select>
                </div>
            </div>

            <button 
                className="px-3 py-1 rounded text-black bg-yellow-300 hover:scale-95 transform transition-transform duration-150"
                onClick={handleSubmit}
            >
                Submit
            </button>
            {isSubmitted && <p className="mt-4 text-white font-bold">Thank you for giving your attendance.</p>}
            <p className="mt-4">Selected: {selectedOption.toUpperCase()}</p>
        </div>
    );
}

export default DropdownSelect;
