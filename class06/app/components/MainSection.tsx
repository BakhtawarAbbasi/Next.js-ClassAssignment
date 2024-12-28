import Image from 'next/image';
const MainSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center md:flex-row justify-between p-5 md:p-10 bg-primary">
      {/* Left Side: Text */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-4 md:space-y-4">
        <div className="inline-block tracking-widest text-lg border-2 border-purple px-4 py-1 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Welcome to my portfolio
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Hi! I'm Bakhtawar Web Developer</h1>
        <p className="text-grayText md:text-base text-md">Hello, I'm a frontend developer and video editor.</p>
        <button className="bg-transparent text-white border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white transition duration-300">Let's Connect</button>
      </div>
      <div>
    <Image src="/public/background" alt="images" width={250} height={250}/>

    </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-2 md:mt-0">
        <Image src="/profile.png" alt="Profile Image" width={250} height={250} className="rounded-full border-4 border-purple shadow-lg" />
      </div>
    </section>
  );
};

export default MainSection;