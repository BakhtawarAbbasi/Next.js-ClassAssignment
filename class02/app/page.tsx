import Image from "next/image";
import Header from "./component/Header";
import About from "./component/About";

export default function Home() {
  return (
    <div className="head">
      <h1>Hello World!</h1>
      <Header/>
      <About/>
   </div>
  );
}
