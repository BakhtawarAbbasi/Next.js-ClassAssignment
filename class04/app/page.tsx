import React from 'react';
import StudentCard from './component/StudentCard';
import Img1 from '/images/https.jpeg';
import Img2 from '/images/https.jpeg';
import Img3 from '/images/https.jpeg';

const students = [
  {
    name: 'Ali Khan',
    age: 16,
    rollNumber: '101',
    className: '10th Grade',
    imageUrl: Img1,
  },
  {
    name: 'Fatima',
    age: 15,
    rollNumber: '102',
    className: '10th Grade',
    imageUrl: Img2,
  },
  {
    name: 'Sara Ahmed',
    age: 17,
    rollNumber: '103',
    className: '11th Grade',
    imageUrl: Img3,
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-white mb-6">Student ID Cards</h1>
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            className={student.className}
            imageUrl={student.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
