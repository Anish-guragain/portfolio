import React from "react"
import anime from "animejs/lib/anime.es.js";

import Typed from "react-typed"
import Navbar from "./navbar"
import About from "./about"
const Home = () => {

	var timeline = anime.timeline({
		easing: "easeOutExpo",
		duration: 1000,
		loop: true,
	  });

	  timeline.add({
		targets: ".hand",
		
		translateX: ["0%", "-20%"],
		rotate: ["0deg", "-20deg"],
	  }).add({
		targets: ".hand",
		translateX: ["-20%", "0%"],
		rotate: ["-20deg", "20deg"],
	  });
	  
	  // Start the animation
	  timeline.play();


return (
<div>
<Navbar/>
	<div className="flex flex-col flex-wrap  justify-center align-middle border-solid border-b-2 border-white   ">
		<div className=" intro flex align-middle justify-center p-5  text-white mt-[3rem] text-[1.5rem] lg:text-[2.5rem]   ">
			<p className="hello flex " >Hello There<p className="hand">👋</p></p>
			<div className="flex mr-4 flex-col lg:flex-row  ">
				<p className="hello  " >I am Anish the Frontend. </p>
				<div className="flex ">
					<p>{"<"}</p>
					<div className="text-blue-300">
						<Typed
						strings={
						[
						"Designer",
						"Developer",
						]}
						typeSpeed={100}
						backSpeed={100}
						loop
						/>
					</div>
					<p >{"/>"}</p>
				</div>
			</div>
		</div>
		<div className=" intro2  flex lg:align-middle justify-center lg:text-center text-white mt-[3rem] text-[1.5rem] lg:text-[2rem]">
			<p className="para w-1/2  ">With around one year of experience in web development I am still a noob but I am learnig fast. I hope I am the one who will work on your website. I also have intrest in cyber security and blockchain</p>
		</div>
		<div className=" intro2  flex lg:align-middle justify-center lg:text-center text-[#ff3737] mt-[3rem] text-[1.5rem] lg:text-[3rem]">
		Website is currently under construction.
		</div>
		<div class="flex justify-center align-middle mt-[3rem] mb-40 ">
		<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-3xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <a className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" href="./src/assets/anish.pdf" download="anishcv.pdf">
        Download Resume
        </a>
        </button>
		</div>
	</div>
	<About/>
</div>


)
}
export default Home