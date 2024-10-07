import { Agent } from 'http';
import StudentCard from './component/StudentCard';
import Image from 'next/image';

const students = [
  {
    name: 'Ali Khan',
    age: 16,
    rollNumber: '101',
    className: '10th Grade',
    imageUrl: ''
  },
  {
    name: 'Fatima Bibi',
    age: 15,
    rollNumber: '102',
    className: '10th Grade',
    imageUrl: 'https://images.unsplash.com/photo-1598462954077-4f6f9b18b6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGtpZHN8ZW58MHx8fHwxNjcxMTc5ODU3&ixlib=rb-1.2.1&q=80&w=1080'

  },
  {
    name: 'Sara Ahmed',
    age: 17,
    rollNumber: '103',
    className: '11th Grade',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE5fHxraWRzfGVufDB8fHx8MTY3MTE3Mzc2NQ&ixlib=rb-1.2.1&q=80&w=1080'
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
<div>
  <h2>
    This is the most important thing in this world for the regardigng property t
  </h2>
</div>
