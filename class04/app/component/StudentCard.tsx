import React from 'react';
interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  imageUrl: string;
}
const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, className, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-l-4 border-blue-600 m-4 transition-transform transform hover:scale-105">
      <div className="bg-cyan-100 p-6 w-60"> {/* Change the inner background color here */}

        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-300 shadow-md" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-700 text-center">Age: <span className="font-medium">{age}</span></p>
        <p className="text-gray-700 text-center">Roll Number: <span className="font-medium">{rollNumber}</span></p>
        <p className="text-gray-700 text-center">Class: <span className="font-medium">{className}</span></p>
      </div>
    </div>
  );
};
export default StudentCard;