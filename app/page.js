"use client";
import Image from "next/image";
import Adobe from "@/public/adobe.svg";
import Figma from "@/public/figma.svg";
import Diamond from "@/public/diamond.svg";
import In from "@/public/in.svg";
import Graphic from "@/public/graphic.svg";
import Mobile from "@/public/mobile.svg";
import webApp from "@/public/webApp.svg";
import uiDesign from "@/public/uiDesign.svg";
import uX from "@/public/uX.svg";
import landingPage from "@/public/landingPage.svg";
import Design from "@/public/Design.svg";
import Dev from "@/public/Dev.svg";
import Management from "@/public/Management.svg";
import showCase from "@/public/showcase.svg";
import Link from "next/link";
import Image1 from "@/public/image1.png";
import Image2 from "@/public/image2.png";
import Image3 from "@/public/image3.png";
import Image4 from "@/public/image4.png";
import profile from "@/public/image4.png";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import zaman from "@/public/zaman.png";
import suchi from "@/public/suchi.png";
import arshad from "@/public/arshad.png";
import ScrollAnimation from "@/components/ScrollAnimation";

import {
	variants,
	scaleUpVariants,
	slideInLeft,
	fadeInUp,
	slideInRight,
} from "@/animation/variants";

export default function Home() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		services: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.success("Inquiry Sent Successfully.", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: "dark",
					transition: Bounce,
				});
				setFormData({
					name: "",
					email: "",
					phone: "",
					services: "",
					message: "",
				});
			} else {
				const errorData = await response.json();
				toast.error("Something went wrong.", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
			}
		} catch (error) {
			toast.error(`Error: ${error.message}`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
		}
	};

	useEffect(() => {
		const handleScroll = (event) => {
			const target = event.target.closest('a[href^="#"]');
			if (target) {
				event.preventDefault();
				const id = target.getAttribute("href").slice(1);
				const element = document.getElementById(id);
				if (element) {
					window.scrollTo({
						top: element.offsetTop,
						behavior: "smooth",
					});
				}
			}
		};

		document.addEventListener("click", handleScroll);

		return () => {
			document.removeEventListener("click", handleScroll);
		};
	}, []);

	const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0); // Initially no div visible

	const toggleVisibilitym = (index) => {
		if (currentVisibleIndex === index) {
			setCurrentVisibleIndex(index); // Hide if the same button is clicked again
		} else {
			setCurrentVisibleIndex(index); // Show the respective div
		}
	};
	const [currentVisibleIndexTwo, setCurrentVisibleIndexTwo] = useState(0); // Initially no div visible

	const toggleVisibilityTwo = (index) => {
		if (currentVisibleIndexTwo === index) {
			setCurrentVisibleIndexTwo(index); // Hide if the same button is clicked again
		} else {
			setCurrentVisibleIndexTwo(index); // Show the respective div
		}
	};

	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsToShow = 1;
	const itemWidth = 370;

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			Math.min(
				prevIndex + itemsToShow,
				Math.floor(testimonials.length / itemsToShow) * itemsToShow
			)
		);
	};

	const [isHidden1, setIsHidden1] = useState(true);
	const [isHidden2, setIsHidden2] = useState(true);
	const [isHidden3, setIsHidden3] = useState(true);
	const [isHidden4, setIsHidden4] = useState(true);
	const [isHidden5, setIsHidden5] = useState(true);
	const [isHidden6, setIsHidden6] = useState(true);
	const [isHidden7, setIsHidden7] = useState(true);
	const [isHidden8, setIsHidden8] = useState(true);
	const [isHidden9, setIsHidden9] = useState(true);
	const [isHidden, setIsHidden] = useState(true);

	const toggleVisibility1 = () => {
		setIsHidden1(!isHidden1);
	};
	const toggleVisibility2 = () => {
		setIsHidden2(!isHidden2);
	};
	const toggleVisibility3 = () => {
		setIsHidden3(!isHidden3);
	};
	const toggleVisibility4 = () => {
		setIsHidden4(!isHidden4);
	};
	const toggleVisibility5 = () => {
		setIsHidden5(!isHidden5);
	};
	const toggleVisibility6 = () => {
		setIsHidden6(!isHidden6);
	};
	const toggleVisibility7 = () => {
		setIsHidden7(!isHidden7);
	};
	const toggleVisibility8 = () => {
		setIsHidden8(!isHidden8);
	};
	const toggleVisibility9 = () => {
		setIsHidden9(!isHidden9);
	};
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};

	const testimonials = [
		{
			quote:
				"Working with Devxplore was a fantastic experience. Their team delivered a sleek, user-friendly mobile app that exceeded our expectations. We've seen a significant increase in user engagement and satisfaction since launching.",
			name: "Vikram Singh",
			title: "CEO of TechInnovate",
			image: profile,
		},
		{
			quote:
				"Devxplore transformed our outdated website into a modern, responsive platform that perfectly reflects our brand. The project was completed on time and within budget. Our online presence has never been stronger!",
			name: "Neha Patil",
			title: "Vice President of Sales, Pinnacle Media Group",
			image: profile,
		},
		{
			quote:
				"We needed a robust e-commerce website to support our growing business, and Devxplore delivered beyond our expectations. Sales have increased by 30% since the launch, and we couldn't be happier.",
			name: "Suresh Iyer",
			title: "CEO, Quantum Reach",
			image: profile,
		},
		{
			quote:
				"The custom software solution developed by Devxplore has streamlined our operations and significantly improved our efficiency. Their post-launch support has been exemplary, ensuring everything runs smoothly.",
			name: "Anjali Gupta",
			title: "Operations Manager at LogisticsPro",
			image: profile,
		},
		{
			quote:
				"The UI/UX design services provided by Devxplore were top-notch. They completely revamped our website's interface, making it more intuitive and visually appealing. Feedback from our users has been overwhelmingly positive.",
			name: "Amit Sharma",
			title: "CTO, TechWave Solutions",
			image: profile,
		},
		{
			quote:
				"Devxplore handled our full-stack development project with utmost professionalism. They delivered a solution that is both scalable and efficient. Their technical expertise made the entire process smooth and stress-free.",
			name: "Priya Menon",
			title: "Head of Marketing, BrightFuture Enterprise",
			image: profile,
		},
		{
			quote:
				"The ongoing support and maintenance services from Devxplore have been a lifesaver. They are always quick to address any issues and provide valuable recommendations for improvements. Knowing we have such a reliable partner gives us peace of mind.",
			name: "Rajesh Kumar",
			title: " Senior Product Manager, Innovatech Systems",
			image: profile,
		},
	];

	return (
		<>
			<div className="overflow-hidden">
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					Bounce="true"
				/>
				<ToastContainer />
				<ScrollAnimation variants={fadeInUp}>
					<div
						id="Home"
						className="w-full bg 2xl:flex-row flex-col flex justify-center items-center sm:min-h-[600px] pt-[120px] relative"
					>
						<div className="2xl:w-1/2 w-full h-full flex flex-col items-center justify-center">
							<div className=" w-[90%] md:w-[80%] 2xl:max-w-[657px] px-5  flex justify-center flex-col gap-[20px] h-[550px]">
								<h4 className="text-[16px] text-[#507C7C]">
									Innovate. Elevate. Captivate
								</h4>
								<h1 className="xl:text-[40px] text-[28px] sm:text-[35px] flex flex-col gap-3">
									Transforming Visions into Digital Excellence
								</h1>
								<p className="text-[16px] text-[#507C7C]">
									At DevXplore, we craft digital experiences that resonate. As
									your strategic digital partner, we merge creativity with
									cutting-edge technology to propel your brand to new heights.
									Join us on a journey where innovation meets impact.
								</p>
								<div className="buttons flex gap-4 z-20">
									<Link
										href={"https://calendly.com/solutions-devxplore/30min"}
										target="_blank"
										scroll={false}
										className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] hover:bg-[#66FFF0] rounded-full hover:text-black text-[14px]"
									>
										Consult now
									</Link>
									<Link
										href="#projects"
										scroll={false}
										className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
									>
										View Projects
									</Link>
								</div>
							</div>
						</div>
						<div className="2xl:w-1/2 h-full hidden md:flex justify-center items-end ">
							<div className="w-[657px] h-[520px] heroBg2 heroBg1 rounded-3xl flex border border-x-[#00393D] border-t-[#00393D] border-b-[#040d0e] relative overflow-hidden bg-gradient-to-b from-[#00393D] to-slate-950">
								<div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
									<svg
										width="328"
										height="446"
										viewBox="0 0 328 446"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g opacity="0.8" filter="url(#filter0_f_1_205)">
											<path
												d="M-8.68408 -29.2935L52.5557 -66.5485L206.533 324.48L-8.68408 -29.2935Z"
												fill="#00393D"
											/>
										</g>
										<defs>
											<filter
												id="filter0_f_1_205"
												x="-129.284"
												y="-187.149"
												width="456.417"
												height="632.229"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB"
											>
												<feFlood floodOpacity="0" result="BackgroundImageFix" />
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="BackgroundImageFix"
													result="shape"
												/>
												<feGaussianBlur
													stdDeviation="60.3"
													result="effect1_foregroundBlur_1_205"
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<div className="w-1/2 h-full rounded-r-3xl flex ">
									<svg
										width="410"
										height="443"
										viewBox="0 0 310 443"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g opacity="0.8" filter="url(#filter0_f_1_206)">
											<path
												d="M295.334 -53.6782L360.324 -23.4358L120.628 321.758L295.334 -53.6782Z"
												fill="#00393D"
											/>
										</g>
										<defs>
											<filter
												id="filter0_f_1_206"
												x="0.0278397"
												y="-174.278"
												width="480.896"
												height="616.636"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB"
											>
												<feFlood floodOpacity="0" result="BackgroundImageFix" />
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="BackgroundImageFix"
													result="shape"
												/>
												<feGaussianBlur
													stdDeviation="60.3"
													result="effect1_foregroundBlur_1_206"
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<div className="absolute h-full w-full backdrop-blur-lg opacity-40 flex flex-col"></div>
								<div className="absolute h-full w-full  flex flex-col p-5 ">
									<div className="w-full flex justify-center h-[20%] text-white gap-5 items-center">
										<button
											className="text-[#507C7C] hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]"
											onClick={() => toggleVisibilitym(0)}
										>
											<span className="text-[14px]">Design</span>
											<div className="h-4 w-full flex flex-col justify-center items-center gap-2">
												{currentVisibleIndex === 0 && (
													<>
														<svg
															width="2"
															height="2"
															viewBox="0 0 2 2"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
														</svg>
														<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent"></div>
													</>
												)}
											</div>
										</button>
										<button
											className="text-[#507C7C] hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]"
											onClick={() => toggleVisibilitym(1)}
										>
											<span className="text-[14px]">Development</span>
											<div className="h-4 w-full flex flex-col justify-center items-center gap-2">
												{currentVisibleIndex === 1 && (
													<>
														<svg
															width="2"
															height="2"
															viewBox="0 0 2 2"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
														</svg>
														<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent"></div>
													</>
												)}
											</div>
										</button>
										<button
											className="text-[#507C7C] hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]"
											onClick={() => toggleVisibilitym(2)}
										>
											<span className="text-[14px]">Management</span>
											<div className="h-4 w-full flex flex-col justify-center items-center gap-2">
												{currentVisibleIndex === 2 && (
													<>
														<svg
															width="2"
															height="2"
															viewBox="0 0 2 2"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
														</svg>
														<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent"></div>
													</>
												)}
											</div>
										</button>
									</div>
									{currentVisibleIndex === 0 && (
										<div className="w-full flex flex-col justify-center h-[80%] z-20">
											<div className="w-full flex flex-col gap-4 items-center justify-center h-[30%]  mt-5">
												<span className="text-[12px] text-[#A2C3C3]">
													Tools we Use For Designing
												</span>
												<div className="w-full h-[60%]">
													<div className="w-[50%] mx-auto h-full py-2 rounded-full border border-[#00393D] bg-[#00171A] flex justify-evenly items-center">
														<Image src={Adobe} width={45} height={45} alt="" />
														<Image src={Figma} width={45} height={45} alt="" />
														<Image
															src={Diamond}
															width={45}
															height={45}
															alt=""
														/>
														<Image src={In} width={45} height={45} alt="" />
													</div>
												</div>
											</div>
											<div className="w-full h-full relative">
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 left-3">
													<Image width={57} height={57} src={webApp} alt="" />
													<span className="text-[14px]">Web Design</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-16 left-[122px] rotate-45">
													<Image width={57} height={57} src={Graphic} alt="" />
													<span className="text-[14px]">Graphic Design</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[200px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 right-[80px]">
													<Image width={57} height={57} src={uX} alt="" />
													<span className="text-[14px]">UX Design</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[75px] right-[-33px] rotate-[58deg]">
													<Image
														width={57}
														height={57}
														src={landingPage}
														alt="landingpage"
													/>
													<span className="text-[14px]">Landing Page</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[260px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[88px] right-[114px] rotate-[16deg]">
													<Image
														width={57}
														height={57}
														src={uiDesign}
														alt="s"
													/>
													<span className="text-[14px]">UI Design</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[215px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[123px] left-[-7px] -rotate-[55deg]">
													<Image width={57} height={57} src={Mobile} alt="" />
													<span className="text-[14px]">Hero Secrion</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
										</div>
									)}
									{currentVisibleIndex === 1 && (
										<div className="w-full flex flex-col justify-center h-[80%] z-20 ">
											<div className="w-full flex flex-col gap-4 items-center justify-center h-[30%]  mt-5">
												<span className="text-[12px] text-[#A2C3C3]">
													Tools we Use For Development
												</span>
												<div className="w-full h-[60%]">
													<div className="w-[50%] mx-auto h-full py-2 rounded-full border border-[#00393D] bg-[#00171A] flex justify-evenly items-center">
														<Image src={Adobe} width={45} height={45} alt="" />
														<Image src={Figma} width={45} height={45} alt="" />
														<Image
															src={Diamond}
															width={45}
															height={45}
															alt=""
														/>
														<Image src={In} width={45} height={45} alt="" />
													</div>
												</div>
											</div>
											<div className="w-full h-full relative">
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 left-3">
													<Image width={57} height={57} src={webApp} alt="" />
													<span className="text-[14px]">GitHub </span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-16 left-[122px] rotate-45">
													<Image width={57} height={57} src={Graphic} alt="" />
													<span className="text-[14px]">VS Code</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[200px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 right-[80px]">
													<Image width={57} height={57} src={uX} alt="" />
													<span className="text-[14px]">JIRA</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[75px] right-[-33px] rotate-[58deg]">
													<Image
														width={57}
														height={57}
														src={landingPage}
														alt=""
													/>
													<span className="text-[14px]">Docker</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[260px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[88px] right-[114px] rotate-[16deg]">
													<Image
														width={57}
														height={57}
														src={uiDesign}
														alt="s"
													/>
													<span className="text-[14px]">Postman</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[215px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[123px] left-[-7px] -rotate-[55deg]">
													<Image width={57} height={57} src={Mobile} alt="" />
													<span className="text-[14px]">AWS</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
										</div>
									)}
									{currentVisibleIndex === 2 && (
										<div className="w-full flex flex-col justify-center h-[80%] z-20 ">
											<div className="w-full flex flex-col gap-4 items-center justify-center h-[30%]  mt-5">
												<span className="text-[12px] text-[#A2C3C3]">
													Tools we Use For Management
												</span>
												<div className="w-full h-[60%]">
													<div className="w-[50%] mx-auto h-full py-2 rounded-full border border-[#00393D] bg-[#00171A] flex justify-evenly items-center">
														<Image src={Adobe} width={45} height={45} alt="" />
														<Image src={Figma} width={45} height={45} alt="" />
														<Image
															src={Diamond}
															width={45}
															height={45}
															alt=""
														/>
														<Image src={In} width={45} height={45} alt="" />
													</div>
												</div>
											</div>
											<div className="w-full h-full relative">
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 left-3">
													<Image width={57} height={57} src={webApp} alt="" />
													<span className="text-[13px]">Microsoft Project</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-16 left-[122px] rotate-45">
													<Image width={57} height={57} src={Graphic} alt="" />
													<span className="text-[14px]">Trello</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[200px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 right-[80px]">
													<Image width={57} height={57} src={uX} alt="" />
													<span className="text-[14px]">Asana</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[75px] right-[-33px] rotate-[58deg]">
													<Image
														width={57}
														height={57}
														src={landingPage}
														alt=""
													/>
													<span className="text-[14px]">Monday.com</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3 gap-2 absolute w-[260px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[88px] right-[114px] rotate-[16deg]">
													<Image
														width={57}
														height={57}
														src={uiDesign}
														alt="s"
													/>
													<span className="text-[14px]">Slack</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<div className="flex items-center justify-between px-3  gap-2 absolute w-[215px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[123px] left-[-7px] -rotate-[55deg]">
													<Image width={57} height={57} src={Mobile} alt="" />
													<span className="text-[13px]">Zoho Projects</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
															stroke="#1AFFE9"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div className="w-full pt-20 min-h-[180px] gap-4  flex flex-col justify-center px-2 md:px-8">
						<h4 className="text-center text-[16px] text-[#C1D7D7] my-4">
							Our Custombers
						</h4>
						<div className="flex items-center lg:flex-row flex-col min-h-[90px] justify-center  md:gap-4 gap-2">
							<div className="flex justify-center w-full lg:w-1/2 items-center gap-4 relative">
								<div className="w-1/3 border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 font-bold text-center sm:text-balance text-xs">
										Pinksurfing
									</span>
								</div>
								<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 font-bold text-center sm:text-balance text-xs">
										Superuniforms
									</span>
								</div>
								<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 font-bold text-center sm:text-balance text-xs">
										Zenith Innovations
									</span>
								</div>
								<div className="w-full absolute bottom-0 h-[20px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
							</div>
							<div className="flex justify-center w-full lg:w-1/2  items-center md:gap-4 gap-2 relative">
								<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 font-bold text-center sm:text-balance text-xs">
										Apex Solutions
									</span>
								</div>
								<div className="w-1/3  border  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 text-center sm:text-balance text-xs font-bold">
										Synergy Consultants
									</span>
								</div>
								<div className="w-1/3  border  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
									<span className="text-[#007780] px-2 text-center sm:text-balance text-xs font-bold">
										SmartAds Solutions
									</span>
								</div>
								<div className="w-full absolute bottom-0 h-[20px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div id="services" className="w-full md:px-8 px-2 pt-24 relative">
						<div className="relative rounded-3xl max-w-full overflow-hidden border-[#002629] md:border sm:p-[16px] border-b-[#000e0f] flex justify-center">
							<div className="w-full sm:block hidden bg-[#011212] h-[16px] overflow-hidden absolute top-0">
								<svg
									width="2000"
									height="42"
									viewBox="0 0 2000 42"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 -5L23.5789 41M23.5789 -5L47.1579 41M47.1579 -5L70.7368 41M70.7368 -5L94.3158 41M94.3158 -5L117.895 41M117.895 -5L141.474 41M141.474 -5L165.053 41M165.053 -5L188.632 41M188.632 -5L212.211 41M212.211 -5L235.789 41M235.789 -5L259.368 41M259.368 -5L282.947 41M282.947 -5L306.526 41M306.526 -5L330.105 41M330.105 -5L353.684 41M353.684 -5L377.263 41M377.263 -5L400.842 41M400.842 -5L424.421 41M424.421 -5L448 41M448 -5L471.579 41M471.579 -5L495.158 41M495.158 -5L518.737 41M518.737 -5L542.316 41M542.316 -5L565.895 41M565.895 -5L589.474 41M589.474 -5L613.053 41M613.053 -5L636.632 41M636.632 -5L660.211 41M660.211 -5L683.789 41M683.789 -5L707.368 41M707.368 -5L730.947 41M730.947 -5L754.526 41M754.526 -5L778.105 41M778.105 -5L801.684 41M801.684 -5L825.263 41M825.263 -5L848.842 41M848.842 -5L872.421 41M872.421 -5L896 41M896 -5L919.579 41M919.579 -5L943.158 41M943.158 -5L966.737 41M966.737 -5L990.316 41M990.316 -5L1013.89 41M1013.89 -5L1037.47 41M1037.47 -5L1061.05 41M1061.05 -5L1084.63 41M1084.63 -5L1108.21 41M1108.21 -5L1131.79 41M1131.79 -5L1155.37 41M1155.37 -5L1178.95 41M1178.95 -5L1202.53 41M1202.53 -5L1226.11 41M1226.11 -5L1249.68 41M1249.68 -5L1273.26 41M1273.26 -5L1296.84 41M1296.84 -5L1320.42 41M1320.42 -5L1344 41M1344 -5L1367.58 41M1367.58 -5L1391.16 41M1391.16 -5L1414.74 41M1414.74 -5L1438.32 41M1438.32 -5L1461.89 41M1461.89 -5L1485.47 41M1485.47 -5L1509.05 41M1509.05 -5L1532.63 41M1532.63 -5L1556.21 41M1556.21 -5L1579.79 41M1579.79 -5L1603.37 41M1603.37 -5L1626.95 41M1626.95 -5L1650.53 41M1650.53 -5L1674.11 41M1674.11 -5L1697.68 41M1697.68 -5L1721.26 41M1721.26 -5L1744.84 41M1744.84 -5L1768.42 41M1768.42 -5L1792 41M1792 -5L1815.58 41M1815.58 -5L1839.16 41M1839.16 -5L1862.74 41M1862.74 -5L1886.32 41M1886.32 -5L1909.89 41M1909.89 -5L1933.47 41M1933.47 -5L1957.05 41M1957.05 -5L1980.63 41M1980.63 -5L2004.21 41"
										stroke="url(#paint0_linear_1_289)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_1_289"
											x1="0"
											y1="18"
											x2="2000"
											y2="18"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#002629" stopOpacity="0" />
											<stop offset="0.0452344" stopColor="#002629" />
											<stop offset="0.950558" stopColor="#002629" />
											<stop offset="1" stopColor="#002629" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="w-[16px] sm:block hidden bg-[#011212] h-full absolute right-0 overflow-hidden">
								<svg
									width="33"
									height="722"
									viewBox="0 0 33 722"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M33 0L1 15.7895M33 15.7895L1 31.5789M33 31.5789L1 47.3684M33 47.3684L1 63.1579M33 63.1579L1 78.9474M33 78.9474L1 94.7368M33 94.7368L1 110.526M33 110.526L1 126.316M33 126.316L1 142.105M33 142.105L1 157.895M33 157.895L1 173.684M33 173.684L1 189.474M33 189.474L1 205.263M33 205.263L1 221.053M33 221.053L1 236.842M33 236.842L1 252.632M33 252.632L1 268.421M33 268.421L1 284.211M33 284.211L1 300M33 300L1 315.789M33 315.789L1 331.579M33 331.579L1 347.368M33 347.368L1 363.158M33 363.158L1 378.947M33 378.947L1 394.737M33 394.737L1 410.526M33 410.526L1 426.316M33 426.316L1 442.105M33 442.105L1 457.895M33 457.895L1 473.684M33 473.684L1 489.474M33 489.474L1 505.263M33 505.263L1 521.053M33 521.053L1 536.842M33 536.842L1 552.632M33 552.632L1 568.421M33 568.421L1 584.211M33 584.211L1 600M33 600L1 615.789M33 615.789L1 631.579M33 631.579L1 647.368M33 647.368L1 663.158M33 663.158L1 678.947M33 678.947L1 694.737M33 694.737L1 710.526M33 710.526L1 726.316M33 726.316L1 742.105M33 742.105L1 757.895M33 757.895L1 773.684M33 773.684L1 789.474M33 789.474L1 805.263M33 805.263L1 821.053M33 821.053L1 836.842M33 836.842L1 852.632M33 852.632L1 868.421M33 868.421L1 884.211M33 884.211L1 900"
										stroke="url(#paint0_linear_1_287)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_1_287"
											x1="17"
											y1="0"
											x2="17"
											y2="900"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#002629" />
											<stop
												offset="0.742191"
												stopColor="#002629"
												stopOpacity="0"
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="w-[16px] sm:block hidden bg-[#011212] h-full absolute left-0 overflow-hidden">
								<svg
									width="33"
									height="722"
									viewBox="0 0 33 722"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M-2.38419e-07 0L32 15.7895M-2.38419e-07 15.7895L32 31.5789M-2.38419e-07 31.5789L32 47.3684M-2.38419e-07 47.3684L32 63.1579M-2.38419e-07 63.1579L32 78.9474M-2.38419e-07 78.9474L32 94.7368M-2.38419e-07 94.7368L32 110.526M-2.38419e-07 110.526L32 126.316M-2.38419e-07 126.316L32 142.105M-2.38419e-07 142.105L32 157.895M-2.38419e-07 157.895L32 173.684M-2.38419e-07 173.684L32 189.474M-2.38419e-07 189.474L32 205.263M-2.38419e-07 205.263L32 221.053M-2.38419e-07 221.053L32 236.842M-2.38419e-07 236.842L32 252.632M-2.38419e-07 252.632L32 268.421M-2.38419e-07 268.421L32 284.211M-2.38419e-07 284.211L32 300M-2.38419e-07 300L32 315.789M-2.38419e-07 315.789L32 331.579M-2.38419e-07 331.579L32 347.368M-2.38419e-07 347.368L32 363.158M-2.38419e-07 363.158L32 378.947M-2.38419e-07 378.947L32 394.737M-2.38419e-07 394.737L32 410.526M-2.38419e-07 410.526L32 426.316M-2.38419e-07 426.316L32 442.105M-2.38419e-07 442.105L32 457.895M-2.38419e-07 457.895L32 473.684M-2.38419e-07 473.684L32 489.474M-2.38419e-07 489.474L32 505.263M-2.38419e-07 505.263L32 521.053M-2.38419e-07 521.053L32 536.842M-2.38419e-07 536.842L32 552.632M-2.38419e-07 552.632L32 568.421M-2.38419e-07 568.421L32 584.211M-2.38419e-07 584.211L32 600M-2.38419e-07 600L32 615.789M-2.38419e-07 615.789L32 631.579M-2.38419e-07 631.579L32 647.368M-2.38419e-07 647.368L32 663.158M-2.38419e-07 663.158L32 678.947M-2.38419e-07 678.947L32 694.737M-2.38419e-07 694.737L32 710.526M-2.38419e-07 710.526L32 726.316M-2.38419e-07 726.316L32 742.105M-2.38419e-07 742.105L32 757.895M-2.38419e-07 757.895L32 773.684M-2.38419e-07 773.684L32 789.474M-2.38419e-07 789.474L32 805.263M-2.38419e-07 805.263L32 821.053M-2.38419e-07 821.053L32 836.842M-2.38419e-07 836.842L32 852.632M-2.38419e-07 852.632L32 868.421M-2.38419e-07 868.421L32 884.211M-2.38419e-07 884.211L32 900"
										stroke="url(#paint0_linear_1_288)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_1_288"
											x1="16"
											y1="0"
											x2="16"
											y2="900"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#002629" />
											<stop
												offset="0.742191"
												stopColor="#002629"
												stopOpacity="0"
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="flex flex-col w-full md:p-10 sm:p-2 px-2 gap-10 items-center servicesBg border-[#002629] rounded-3xl sm:border bg-[#000e0f]">
								<div className="h-[200px] mx-auto max-w-full flex flex-col items-center justify-center gap-5 my-10">
									<h1 className="sm:text-[38px] text-[28px] text-center text-[#E5FFFD]">
										Our Comprehensive Services Suite
									</h1>
									<p className="text-center text-[16px] text-[#507C7C] ">
										DevXplore offers a diverse array of expertly crafted
										services, seamlessly merging creativity and technology to
										deliver solutions that exceed expectations and drive digital
										success.
									</p>
								</div>
								<div className="min-h-[450px] flex flex-col items-center px-2 gap-8">
									<div className="  flex lg:flex-row flex-col items-center gap-8">
										<div className="w-full lg:w-1/2 ">
											<ScrollAnimation variants={slideInLeft}>
												<div className="flex flex-col w-full gap-5 justify-evenly min-h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
													<div className="w-full flex flex-col gap-5 ">
														<div className="w-full  flex justify-between items-center">
															<div className="h-full flex gap-2 items-center">
																<Image
																	width={50}
																	height={50}
																	src={Dev}
																	alt=""
																/>
																<span className="text-[18px] text-[#CCFFFA]">
																	Design
																</span>
															</div>
															<div className="h-full flex items-center justify-center text-[#649B9B]"></div>
														</div>
														<div className=" flex items-center flex-wrap  gap-3">
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	UI Design
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	UX Design
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Branding
																</span>
															</div>
														</div>
													</div>
													<div className="w-full  flex flex-col gap-4">
														<div className="w-full  flex justify-center items-center z-20">
															<p className="text-[16px] text-[#649B9B] text-center">
																At DevXplore, were dedicated to crafting
																captivating designs that resonate with users.
																Every detail, from color to navigation, is
																meticulously considered for a seamless
																experience. Committed to innovation
															</p>
														</div>
														<button className="w-[90%] mx-auto h-[50px] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
															Learn More
														</button>
													</div>
												</div>
											</ScrollAnimation>
										</div>
										<div className="w-full lg:w-1/2 ">
											<ScrollAnimation variants={slideInRight}>
												<div className="flex flex-col  w-full  gap-5 justify-evenly min-h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
													<div className="w-full flex flex-col gap-5 ">
														<div className="w-full  flex justify-between items-center">
															<div className="h-full flex gap-2 items-center">
																<Image
																	width={50}
																	height={50}
																	src={Dev}
																	alt=""
																/>
																<span className="text-[18px] text-[#CCFFFA]">
																	Development
																</span>
															</div>
															<div className="h-full flex items-center justify-center text-[#649B9B]"></div>
														</div>
														<div className=" flex items-center flex-wrap  gap-3">
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Frontend
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Backend
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Full Stack
																</span>
															</div>
														</div>
													</div>
													<div className="w-full  flex flex-col gap-4">
														<div className="w-full  flex justify-center items-center z-20">
															<p className="text-[16px] text-[#649B9B] text-center">
																At DevXplore, we’re committed to developing
																robust solutions that drive performance. Every
																aspect, from frontend to backend, is
																meticulously engineered for a seamless
																experience. Committed to quality.
															</p>
														</div>
														<button className="w-[90%] mx-auto h-[50px] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
															Learn More
														</button>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
									<div className=" flex  lg:flex-row flex-col items-center gap-8">
										<div className="w-full lg:w-1/2 ">
											<ScrollAnimation variants={slideInLeft}>
												<div className="flex flex-col gap-5 w-full justify-evenly min-h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
													<div className="w-full flex flex-col gap-5 ">
														<div className="w-full  flex justify-between items-center">
															<div className="h-full flex gap-2 items-center">
																<Image
																	width={50}
																	height={50}
																	src={Dev}
																	alt=""
																/>
																<span className="text-[18px] text-[#CCFFFA]">
																	Marketing
																</span>
															</div>
															<div className="h-full flex items-center justify-center text-[#649B9B]"></div>
														</div>
														<div className=" flex items-center flex-wrap  gap-3">
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Digital
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Content
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[14px] text-[#649B9B]">
																	Email
																</span>
															</div>
														</div>
													</div>
													<div className="w-full  flex flex-col gap-4">
														<div className="w-full  flex justify-center items-center z-20">
															<p className="text-[16px] text-[#649B9B] text-center">
																At DevXplore, we’re focused on crafting
																effective marketing strategies that boost your
																online presence. Every element, from SEO to
																social media, is meticulously planned for
																maximum impact. Committed to growth.
															</p>
														</div>
														<button className="w-[90%] mx-auto h-[50px] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
															Learn More
														</button>
													</div>
												</div>
											</ScrollAnimation>
										</div>
										<div className="w-full lg:w-1/2 ">
											<ScrollAnimation variants={slideInRight}>
												<div className=" flex flex-col gap-5 w-full justify-evenly min-h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
													<div className="w-full flex flex-col gap-5 ">
														<div className="w-full flex justify-between items-center">
															<div className="h-full flex gap-2 items-center">
																<Image
																	width={50}
																	height={50}
																	src={Dev}
																	alt=""
																/>
																<span className="text-[18px] text-[#CCFFFA]">
																	Consulting
																</span>
															</div>
															<div className="h-full flex items-center justify-center text-[#649B9B]"></div>
														</div>
														<div className="w-full flex items-center flex-wrap gap-3">
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="sm:text-[12px] text-[10px] text-center  text-[#649B9B]">
																	IT Consulting
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[10px] sm:text-[12px] text-center text-[#649B9B]">
																	Business Strategy
																</span>
															</div>
															<div className="w-[120px] border h-[50px] flex items-center justify-center rounded-full border-[#00393D]">
																<span className="text-[10px] sm:text-[12px]  text-center text-[#649B9B]">
																	Management
																</span>
															</div>
														</div>
													</div>
													<div className="w-full  flex flex-col gap-4">
														<div className="w-full  flex justify-center items-center z-20">
															<p className="text-[16px] text-[#649B9B] text-center">
																At DevXplore, we’re dedicated to providing
																expert consulting services that drive success.
																Every aspect, from strategy to execution, is
																meticulously tailored for optimal results.
																Committed to excellence.
															</p>
														</div>
														<button className="w-[90%] mx-auto h-[50px] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
															Learn More
														</button>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 w-full h-[350px]  bg-gradient-to-t from-[#000e0f] to-transparent"></div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div className="w-full px-2 sm:px-2 pt-24 flex">
						<div className="w-full min-h-[400px] relative  rounded-3xl overflow-hidden flex flex-col gap- 2xl:flex-row 2xl:justify-center items-center">
							<div className="2xl:w-[45%] px-8 min-h-[400px] justify-center flex flex-col gap-5 ">
								<div className=" flex flex-col gap-8">
									<h1 className="sm:text-[38px] text-[28px] text-[#E5FFFD]">
										Unlock the Potential of Your Business with Devxplore!
									</h1>
									<p className="text-[#507C7C] text-[16px]">
										At Devxplore, we specialize in crafting custom apps and
										websites that cater to your unique business needs. Our team
										of expert developers and designers work closely with you to
										transform your vision into a reality. Whether you need a
										sleek, user-friendly website or a robust, scalable mobile
										app, we have the skills and experience to deliver
										exceptional results.
									</p>
								</div>
								<div className="buttons flex gap-4">
									<Link
										href={"https://calendly.com/solutions-devxplore/30min"}
										target="_blank"
										scroll={false}
										className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] hover:bg-[#66FFF0] rounded-full hover:text-black text-[14px]"
									>
										Consult now
									</Link>
									<Link
										href="#projects"
										scroll={false}
										className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
									>
										View Projects
									</Link>
								</div>
							</div>
							<div className="hidden 2xl:w-[55%] w-full min-h-[450px] lg:flex flex-col justify-center items-center  relative showCaseBg">
								<Image
									className="absolute top-16"
									width={600}
									height={203}
									src={showCase}
									alt=""
								/>
								<div className="w-[750px] h-[150px] flex justify-between items-center absolute top-[20px]">
									<div className="flex flex-col gap-4 h-full p-3 border-[#00393D] border rounded-3xl w-[350px] backdrop-filter backdrop-blur-md opacity-65 bg-gradient-to-tl from-[#001a1b] to-[#00171A] ">
										<div className="flex items-center gap-2">
											<svg
												width="50"
												height="50"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clipPath="url(#clip0_1_405)">
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														fill="#002629"
													/>
													<path
														d="M1 12.2H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 1L45.7998 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 8L45.7998 16.4"
														stroke="url(#paint0_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 12.2L41.6 12.2"
														stroke="url(#paint1_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M1 45.8H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 1L12.2002 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 41.6L45.7998 50"
														stroke="url(#paint2_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 45.8L41.6 45.8"
														stroke="url(#paint3_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 41.6L12.2002 50"
														stroke="url(#paint4_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 45.8L7.99992 45.8"
														stroke="url(#paint5_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 8L12.2002 16.4"
														stroke="url(#paint6_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 12.2L7.99992 12.2"
														stroke="url(#paint7_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M31.217 20.4996C29.796 19.8335 28.2035 19.8334 26.7825 20.4996L22.4892 22.5125C23.2711 22.5968 23.986 23.0894 24.3179 23.8638C24.8074 25.0059 24.2783 26.3287 23.1361 26.8182L22.0605 27.2792C21.5259 27.5082 21.2226 27.6406 21.0178 27.7456C21.0167 27.7619 21.0156 27.7788 21.0146 27.7962L26.7826 30.5003C28.2036 31.1665 29.7961 31.1665 31.2171 30.5003L37.9082 27.3634C39.3637 26.6811 39.3637 24.319 37.9082 23.6366L31.217 20.4996Z"
														fill="#66FFF0"
													/>
													<path
														d="M21.9998 29.9147V33.6254C21.9998 34.6334 22.5033 35.5772 23.3851 36.0656C24.8535 36.8787 27.2038 38 28.9998 38C30.7958 38 33.1461 36.8787 34.6145 36.0656C35.4963 35.5772 35.9998 34.6334 35.9998 33.6254V29.9148L31.8538 31.8585C30.0294 32.7138 27.9703 32.7138 26.1459 31.8585L21.9998 29.9147Z"
														fill="#66FFF0"
													/>
													<path
														d="M22.5454 25.4396C22.9262 25.2764 23.1025 24.8355 22.9394 24.4548C22.7762 24.074 22.3353 23.8977 21.9546 24.0608L20.8432 24.5371C20.2857 24.776 19.8133 24.9785 19.4425 25.1871C19.048 25.409 18.7085 25.6694 18.4542 26.0551C18.1999 26.4408 18.0942 26.8555 18.0456 27.3055C18 27.7284 18 28.2424 18 28.8489V31.7502C18 32.1644 18.3358 32.5002 18.75 32.5002C19.1642 32.5002 19.5 32.1644 19.5 31.7502V28.8878C19.5 28.232 19.501 27.7995 19.537 27.4665C19.571 27.1517 19.6305 26.9961 19.7065 26.8809C19.7824 26.7656 19.902 26.6496 20.178 26.4944C20.4698 26.3302 20.867 26.1589 21.4698 25.9006L22.5454 25.4396Z"
														fill="#66FFF0"
													/>
												</g>
												<rect
													x="0.5"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="#00393D"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_405"
														x1="45.7998"
														y1="16.4"
														x2="45.7998"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_1_405"
														x1="41.6"
														y1="12.2"
														x2="50"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint2_linear_1_405"
														x1="45.7998"
														y1="50"
														x2="45.7998"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint3_linear_1_405"
														x1="41.6"
														y1="45.8"
														x2="50"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint4_linear_1_405"
														x1="12.2002"
														y1="50"
														x2="12.2002"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint5_linear_1_405"
														x1="7.99992"
														y1="45.8"
														x2="16.3999"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint6_linear_1_405"
														x1="12.2002"
														y1="16.4"
														x2="12.2002"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint7_linear_1_405"
														x1="7.99992"
														y1="12.2"
														x2="16.3999"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<clipPath id="clip0_1_405">
														<rect
															x="1"
															y="1"
															width="56"
															height="56"
															rx="28"
															fill="white"
														/>
													</clipPath>
												</defs>
											</svg>
											<span className="text-[#CCFFFA] text-[18px]">
												Expertise
											</span>
										</div>
										<p className="text-[15px] text-[#649B9B]">
											We prioritize our clients and their unique needs. We
											listen to your ideas, challenges.
										</p>
										<div></div>
									</div>
									<div className="flex flex-col gap-4 h-full p-3 border-[#00393D] border rounded-3xl w-[350px] backdrop-filter backdrop-blur-md opacity-65 bg-gradient-to-tl from-[#001a1b] to-[#00171A] ">
										<div className="flex items-center gap-2">
											<svg
												width="50"
												height="50"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clipPath="url(#clip0_1_425)">
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														fill="#002629"
													/>
													<path
														d="M1 12.2H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 1L45.7998 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 8L45.7998 16.4"
														stroke="url(#paint0_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 12.2L41.6 12.2"
														stroke="url(#paint1_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M1 45.8H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 1L12.2002 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 41.6L45.7998 50"
														stroke="url(#paint2_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 45.8L41.6 45.8"
														stroke="url(#paint3_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 41.6L12.2002 50"
														stroke="url(#paint4_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 45.8L7.9999 45.8"
														stroke="url(#paint5_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 8L12.2002 16.4"
														stroke="url(#paint6_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 12.2L7.9999 12.2"
														stroke="url(#paint7_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M32.5 24.5C32.5 26.433 30.933 28 29 28C27.067 28 25.5 26.433 25.5 24.5C25.5 22.567 27.067 21 29 21C30.933 21 32.5 22.567 32.5 24.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M35 33.5C35 35.433 32.3137 37 29 37C25.6863 37 23 35.433 23 33.5C23 31.567 25.6863 30 29 30C32.3137 30 35 31.567 35 33.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M24.122 22C24.2995 22 24.4728 22.0174 24.6401 22.0506C24.2325 22.7745 24 23.6101 24 24.5C24 25.3683 24.2213 26.1848 24.6106 26.8964C24.4524 26.9258 24.2891 26.9413 24.122 26.9413C22.7076 26.9413 21.561 25.8351 21.561 24.4706C21.561 23.1061 22.7076 22 24.122 22Z"
														fill="#66FFF0"
													/>
													<path
														d="M22.4473 35.986C21.8794 35.3071 21.5 34.474 21.5 33.5C21.5 32.5558 21.8566 31.744 22.3958 31.0767C20.4911 31.2245 19 32.2662 19 33.5294C19 34.8044 20.5173 35.8538 22.4473 35.986Z"
														fill="#66FFF0"
													/>
													<path
														d="M33.9999 24.5C33.9999 25.3683 33.7786 26.1848 33.3893 26.8964C33.5475 26.9258 33.7108 26.9413 33.8779 26.9413C35.2923 26.9413 36.4389 25.8351 36.4389 24.4706C36.4389 23.1061 35.2923 22 33.8779 22C33.7004 22 33.5272 22.0174 33.3599 22.0506C33.7674 22.7745 33.9999 23.6101 33.9999 24.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M35.5526 35.986C37.4826 35.8538 38.9999 34.8044 38.9999 33.5294C38.9999 32.2662 37.5088 31.2245 35.6041 31.0767C36.1433 31.744 36.4999 32.5558 36.4999 33.5C36.4999 34.474 36.1205 35.3071 35.5526 35.986Z"
														fill="#66FFF0"
													/>
												</g>
												<rect
													x="0.5"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="#00393D"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_425"
														x1="45.7998"
														y1="16.4"
														x2="45.7998"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_1_425"
														x1="41.6"
														y1="12.2"
														x2="50"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint2_linear_1_425"
														x1="45.7998"
														y1="50"
														x2="45.7998"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint3_linear_1_425"
														x1="41.6"
														y1="45.8"
														x2="50"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint4_linear_1_425"
														x1="12.2002"
														y1="50"
														x2="12.2002"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint5_linear_1_425"
														x1="7.9999"
														y1="45.8"
														x2="16.3999"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint6_linear_1_425"
														x1="12.2002"
														y1="16.4"
														x2="12.2002"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint7_linear_1_425"
														x1="7.9999"
														y1="12.2"
														x2="16.3999"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<clipPath id="clip0_1_425">
														<rect
															x="1"
															y="1"
															width="56"
															height="56"
															rx="28"
															fill="white"
														/>
													</clipPath>
												</defs>
											</svg>
											<span className="text-[#CCFFFA] text-[18px]">
												Client-Centric Approach
											</span>
										</div>
										<p className="text-[15px] text-[#649B9B]">
											We prioritize our clients and their unique needs. We
											listen to your ideas, challenges.
										</p>
										<div></div>
									</div>
								</div>
								<div className="w-[750px] h-[150px] flex justify-between items-center absolute bottom-[42px]">
									<div className="flex flex-col gap-4 h-full p-3 border-[#00393D] border rounded-3xl w-[350px] backdrop-filter backdrop-blur-md opacity-65 bg-gradient-to-tl from-[#001a1b] to-[#00171A] ">
										<div className="flex items-center gap-2">
											<svg
												width="50"
												height="50"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clipPath="url(#clip0_1_405)">
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														fill="#002629"
													/>
													<path
														d="M1 12.2H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 1L45.7998 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 8L45.7998 16.4"
														stroke="url(#paint0_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 12.2L41.6 12.2"
														stroke="url(#paint1_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M1 45.8H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 1L12.2002 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 41.6L45.7998 50"
														stroke="url(#paint2_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 45.8L41.6 45.8"
														stroke="url(#paint3_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 41.6L12.2002 50"
														stroke="url(#paint4_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 45.8L7.99992 45.8"
														stroke="url(#paint5_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 8L12.2002 16.4"
														stroke="url(#paint6_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 12.2L7.99992 12.2"
														stroke="url(#paint7_linear_1_405)"
														strokeWidth="0.6"
													/>
													<path
														d="M31.217 20.4996C29.796 19.8335 28.2035 19.8334 26.7825 20.4996L22.4892 22.5125C23.2711 22.5968 23.986 23.0894 24.3179 23.8638C24.8074 25.0059 24.2783 26.3287 23.1361 26.8182L22.0605 27.2792C21.5259 27.5082 21.2226 27.6406 21.0178 27.7456C21.0167 27.7619 21.0156 27.7788 21.0146 27.7962L26.7826 30.5003C28.2036 31.1665 29.7961 31.1665 31.2171 30.5003L37.9082 27.3634C39.3637 26.6811 39.3637 24.319 37.9082 23.6366L31.217 20.4996Z"
														fill="#66FFF0"
													/>
													<path
														d="M21.9998 29.9147V33.6254C21.9998 34.6334 22.5033 35.5772 23.3851 36.0656C24.8535 36.8787 27.2038 38 28.9998 38C30.7958 38 33.1461 36.8787 34.6145 36.0656C35.4963 35.5772 35.9998 34.6334 35.9998 33.6254V29.9148L31.8538 31.8585C30.0294 32.7138 27.9703 32.7138 26.1459 31.8585L21.9998 29.9147Z"
														fill="#66FFF0"
													/>
													<path
														d="M22.5454 25.4396C22.9262 25.2764 23.1025 24.8355 22.9394 24.4548C22.7762 24.074 22.3353 23.8977 21.9546 24.0608L20.8432 24.5371C20.2857 24.776 19.8133 24.9785 19.4425 25.1871C19.048 25.409 18.7085 25.6694 18.4542 26.0551C18.1999 26.4408 18.0942 26.8555 18.0456 27.3055C18 27.7284 18 28.2424 18 28.8489V31.7502C18 32.1644 18.3358 32.5002 18.75 32.5002C19.1642 32.5002 19.5 32.1644 19.5 31.7502V28.8878C19.5 28.232 19.501 27.7995 19.537 27.4665C19.571 27.1517 19.6305 26.9961 19.7065 26.8809C19.7824 26.7656 19.902 26.6496 20.178 26.4944C20.4698 26.3302 20.867 26.1589 21.4698 25.9006L22.5454 25.4396Z"
														fill="#66FFF0"
													/>
												</g>
												<rect
													x="0.5"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="#00393D"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_405"
														x1="45.7998"
														y1="16.4"
														x2="45.7998"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_1_405"
														x1="41.6"
														y1="12.2"
														x2="50"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint2_linear_1_405"
														x1="45.7998"
														y1="50"
														x2="45.7998"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint3_linear_1_405"
														x1="41.6"
														y1="45.8"
														x2="50"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint4_linear_1_405"
														x1="12.2002"
														y1="50"
														x2="12.2002"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint5_linear_1_405"
														x1="7.99992"
														y1="45.8"
														x2="16.3999"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint6_linear_1_405"
														x1="12.2002"
														y1="16.4"
														x2="12.2002"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint7_linear_1_405"
														x1="7.99992"
														y1="12.2"
														x2="16.3999"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<clipPath id="clip0_1_405">
														<rect
															x="1"
															y="1"
															width="56"
															height="56"
															rx="28"
															fill="white"
														/>
													</clipPath>
												</defs>
											</svg>
											<span className="text-[#CCFFFA] text-[18px]">
												Expertise
											</span>
										</div>
										<p className="text-[15px] text-[#649B9B]">
											We prioritize our clients and their unique needs. We
											listen to your ideas, challenges.
										</p>
									</div>
									<div className="flex flex-col gap-4 h-full p-3 border-[#00393D] border rounded-3xl w-[350px] backdrop-filter backdrop-blur-md opacity-65 bg-gradient-to-tl from-[#001a1b] to-[#00171A] ">
										<div className="flex items-center gap-2">
											<svg
												width="50"
												height="50"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clipPath="url(#clip0_1_425)">
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														fill="#002629"
													/>
													<path
														d="M1 12.2H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 1L45.7998 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 8L45.7998 16.4"
														stroke="url(#paint0_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 12.2L41.6 12.2"
														stroke="url(#paint1_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M1 45.8H57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 1L12.2002 57"
														stroke="#00474D"
														strokeWidth="0.6"
													/>
													<path
														d="M45.7998 41.6L45.7998 50"
														stroke="url(#paint2_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M50 45.8L41.6 45.8"
														stroke="url(#paint3_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 41.6L12.2002 50"
														stroke="url(#paint4_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 45.8L7.9999 45.8"
														stroke="url(#paint5_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M12.2002 8L12.2002 16.4"
														stroke="url(#paint6_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M16.3999 12.2L7.9999 12.2"
														stroke="url(#paint7_linear_1_425)"
														strokeWidth="0.6"
													/>
													<path
														d="M32.5 24.5C32.5 26.433 30.933 28 29 28C27.067 28 25.5 26.433 25.5 24.5C25.5 22.567 27.067 21 29 21C30.933 21 32.5 22.567 32.5 24.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M35 33.5C35 35.433 32.3137 37 29 37C25.6863 37 23 35.433 23 33.5C23 31.567 25.6863 30 29 30C32.3137 30 35 31.567 35 33.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M24.122 22C24.2995 22 24.4728 22.0174 24.6401 22.0506C24.2325 22.7745 24 23.6101 24 24.5C24 25.3683 24.2213 26.1848 24.6106 26.8964C24.4524 26.9258 24.2891 26.9413 24.122 26.9413C22.7076 26.9413 21.561 25.8351 21.561 24.4706C21.561 23.1061 22.7076 22 24.122 22Z"
														fill="#66FFF0"
													/>
													<path
														d="M22.4473 35.986C21.8794 35.3071 21.5 34.474 21.5 33.5C21.5 32.5558 21.8566 31.744 22.3958 31.0767C20.4911 31.2245 19 32.2662 19 33.5294C19 34.8044 20.5173 35.8538 22.4473 35.986Z"
														fill="#66FFF0"
													/>
													<path
														d="M33.9999 24.5C33.9999 25.3683 33.7786 26.1848 33.3893 26.8964C33.5475 26.9258 33.7108 26.9413 33.8779 26.9413C35.2923 26.9413 36.4389 25.8351 36.4389 24.4706C36.4389 23.1061 35.2923 22 33.8779 22C33.7004 22 33.5272 22.0174 33.3599 22.0506C33.7674 22.7745 33.9999 23.6101 33.9999 24.5Z"
														fill="#66FFF0"
													/>
													<path
														d="M35.5526 35.986C37.4826 35.8538 38.9999 34.8044 38.9999 33.5294C38.9999 32.2662 37.5088 31.2245 35.6041 31.0767C36.1433 31.744 36.4999 32.5558 36.4999 33.5C36.4999 34.474 36.1205 35.3071 35.5526 35.986Z"
														fill="#66FFF0"
													/>
												</g>
												<rect
													x="0.5"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="#00393D"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_425"
														x1="45.7998"
														y1="16.4"
														x2="45.7998"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_1_425"
														x1="41.6"
														y1="12.2"
														x2="50"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint2_linear_1_425"
														x1="45.7998"
														y1="50"
														x2="45.7998"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint3_linear_1_425"
														x1="41.6"
														y1="45.8"
														x2="50"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint4_linear_1_425"
														x1="12.2002"
														y1="50"
														x2="12.2002"
														y2="41.6"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint5_linear_1_425"
														x1="7.9999"
														y1="45.8"
														x2="16.3999"
														y2="45.8001"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint6_linear_1_425"
														x1="12.2002"
														y1="16.4"
														x2="12.2002"
														y2="8"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint7_linear_1_425"
														x1="7.9999"
														y1="12.2"
														x2="16.3999"
														y2="12.2"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#19FFE9" stopOpacity="0" />
														<stop offset="0.50284" stopColor="#19FFE9" />
														<stop
															offset="1"
															stopColor="#19FFE9"
															stopOpacity="0"
														/>
													</linearGradient>
													<clipPath id="clip0_1_425">
														<rect
															x="1"
															y="1"
															width="56"
															height="56"
															rx="28"
															fill="white"
														/>
													</clipPath>
												</defs>
											</svg>
											<span className="text-[#CCFFFA] text-[18px]">
												Client-Centric Approach
											</span>
										</div>
										<p className="text-[15px] text-[#649B9B]">
											We prioritize our clients and their unique needs. We
											listen to your ideas, challenges.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div id="projects" className="pt-24 md:px-8 p-2 w-full relative">
						<div className="w-full flex flex-col gap-10 bg showCaseBg3">
							<div className="w-[90%] mx-auto flex flex-col gap-4">
								<h3 className="text-center sm:text-[38px] text-[28px] text-[#E5FFFD]">
									Showcasing Digital Brilliance
								</h3>
								<p className="text-[16px] text-[#507C7C] text-center">
									Explore a gallery of our proudest achievements and witness the
									seamless fusion of creativity and technology in each project
									within our diverse portfolio.
								</p>
							</div>
							<div className="w-full flex justify-between">
								<div className="max-w-[500px] h-[50px] px-2 hidden md:flex justify-center items-center bg-[#001719] border border-[#00393d] rounded-full">
									<ul className="flex justify-evenly max-w-[490px]  items-center transition-all">
										<div className="w-[100px] flex justify-center items-center">
											<button
												onClick={() => toggleVisibilityTwo(0)}
												className={`text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-[100px]  gap-2.5 flex justify-center items-center ${
													currentVisibleIndexTwo === 0
														? "bg-gradient-to-l from-[#00181b] to-emerald-950 border border-teal-700 text-white"
														: "bg-none border-none"
												} transition-all duration-700 ease-in-out`}
											>
												<div className="text-[14px] ">Design</div>
											</button>
										</div>
										<div className="w-[120px] flex justify-center items-center">
											<button
												onClick={() => toggleVisibilityTwo(1)}
												className={`text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-[100px] gap-2.5 flex justify-center items-center ${
													currentVisibleIndexTwo === 1
														? "bg-gradient-to-l from-[#00181b] to-emerald-950 border border-teal-700 text-white"
														: "bg-none border-none"
												} transition-all duration-700`}
											>
												<div className="text-[14px]  ">Development</div>
											</button>
										</div>
										<div className="w-[100px] flex justify-center items-center">
											<button
												onClick={() => toggleVisibilityTwo(2)}
												className={`text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-[100px] gap-2.5 flex justify-center items-center ${
													currentVisibleIndexTwo === 2
														? "bg-gradient-to-l from-[#00181b] to-emerald-950 border border-teal-700 text-white"
														: "bg-none border-none"
												} transition-all duration-700`}
											>
												<div className="text-[14px] ">Marketing</div>
											</button>
										</div>
										<div className="w-[120px] flex justify-center items-center">
											<button
												onClick={() => toggleVisibilityTwo(3)}
												className={`text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-[100px] gap-2.5 flex justify-center items-center ${
													currentVisibleIndexTwo === 3
														? "bg-gradient-to-l from-[#00181b] to-emerald-950  border-teal-700 border text-white"
														: "bg-none border-none"
												} transition-all duration-700`}
											>
												<div className="text-[14px] ">Management</div>
											</button>
										</div>
									</ul>
								</div>
								<div className="flex flex-col gap-3 items-center w-full">
									<div className="max-w-[300px] min-h-[50px] px-2 md:hidden flex justify-center items-center bg-[#001719] border border-[#00393d] rounded-xl">
										<ul className="flex flex-col justify-evenly max-w-[490px]  items-center transition-all">
											<div className="flex items-center gap-2 p-3">
												<div className="w-[150px] flex justify-center items-center">
													<button
														onClick={() => toggleVisibilityTwo(0)}
														className={` text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-xl gap-2.5 flex justify-center items-center ${
															currentVisibleIndexTwo === 0
																? "bg-gradient-to-l from-[#00181b] to-emerald-950  border-teal-700 border text-white"
																: "bg-none border-none"
														} transition-all duration-700`}
													>
														<div className="text-[14px] ">Design</div>
													</button>
												</div>
												<div className="w-[150px] flex justify-center items-center">
													<button
														onClick={() => toggleVisibilityTwo(1)}
														className={` text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-xl gap-2.5 flex justify-center items-center ${
															currentVisibleIndexTwo === 1
																? "bg-gradient-to-l from-[#00181b] to-emerald-950  border-teal-700 border text-white"
																: "bg-none border-none"
														} transition-all duration-700`}
													>
														<div className="text-[14px]  ">Development</div>
													</button>
												</div>
											</div>
											<div className="flex items-center gap-2 p-3">
												<div className="w-[150px] flex justify-center items-center">
													<button
														onClick={() => toggleVisibilityTwo(2)}
														className={` text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-xl gap-2.5 flex justify-center items-center ${
															currentVisibleIndexTwo === 2
																? "bg-gradient-to-l from-[#00181b] to-emerald-950  border-teal-700 border text-white"
																: "bg-none border-none"
														} transition-all duration-700`}
													>
														<div className="text-[14px] ">Marketing</div>
													</button>
												</div>
												<div className="w-[150px] flex justify-center items-center">
													<button
														onClick={() => toggleVisibilityTwo(3)}
														className={` text-[#649B9B] min-w-[72px] h-[40px] px-2 rounded-xl gap-2.5 flex justify-center items-center ${
															currentVisibleIndexTwo === 3
																? "bg-gradient-to-l from-[#00181b] to-emerald-950  border-teal-700 border text-white"
																: "bg-none border-none"
														} transition-all duration-700`}
													>
														<div className="text-[14px] ">Management</div>
													</button>
												</div>
											</div>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div
									className={`Design  ${
										currentVisibleIndexTwo === 0
											? "opacity-100 h-auto ="
											: "opacity-0 h-0 "
									} transition-opacity duration-700`}
								>
									<div className="w-full min-h-[600px] xl:flex-row flex-col flex items-center gap-10 ">
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="relative min-h-[600px] justify-between flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																Designer Portfolio
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of unique design projects that
															blend creativity and technical finesse. Our
															projects cater to the dynamic needs of the Indian
															market.
														</p>
													</div>
													<div className="w-full flex flex-wrap items-center  gap-3">
														<div className="flex gap-3 items-center w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5] w-[90px]">
																Rohan Techs
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center w-[160px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Agency
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center w-[240px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Design
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Development
															</span>
														</div>
													</div>
													<div className="w-full border flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image1}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image2}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>

										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="relative min-h-[600px] justify-between flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																FutureWave AI
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of unique design projects that
															blend creativity and technical finesse. Our
															projects cater to the dynamic needs of the Indian
															market.
														</p>
													</div>
													<div className="w-full flex items-center  flex-wrap gap-3">
														<div className="flex gap-3 items-center  justify-center w-[170px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																FutureWave
															</span>
														</div>
														<div className="flex gap-3 items-center  w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Ai & Am
															</span>
														</div>
														<div className="flex gap-3 items-center  justify-center w-[250px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Design
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Development
															</span>
														</div>
													</div>
													<div className="w-full border  flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl  ">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image3}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image4}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>
								<div
									className={`Development  ${
										currentVisibleIndexTwo === 1
											? "opacity-100 h-auto "
											: "opacity-0 h-0"
									} transition-opacity duration-700`}
								>
									<div className="w-full min-h-[600px] xl:flex-row flex-col flex items-center gap-10">
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className=" relative min-h-[600px] justify-between flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																Agency Website
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of unique development projects
															that blend creativity and technical finesse. Our
															projects are tailored to the fast-growing Indian
															tech sector.
														</p>
													</div>
													<div className="w-full flex flex-wrap items-center  gap-3">
														<div className="flex gap-3 items-center w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[11px] text-[#99FFF5] w-[90px]">
																Sadikul Amin
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center w-[160px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Agency
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center min-w-[240px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Development
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Deployment
															</span>
														</div>
													</div>
													<div className="w-full border flex  flex-col  gap-5 items-center  p-4 border-[#00393D] rounded-3xl">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image1}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image2}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="relative min-h-[600px] justify-between flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																Zenith Innovations
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of innovative development
															projects that blend technical expertise and
															creative solutions. Our projects cater to the
															dynamic needs of the Indian market.
														</p>
													</div>
													<div className="w-full flex items-center  flex-wrap gap-3">
														<div className="flex gap-3 items-center  justify-center min-w-[170px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Zenith Innovations
															</span>
														</div>
														<div className="flex gap-3 items-center  min-w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Software Development
															</span>
														</div>
														<div className="flex gap-3 items-center  justify-center min-w-[250px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Web
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Mobile Development
															</span>
														</div>
													</div>
													<div className="w-full border  flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl  ">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image3}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image4}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>
								<div
									className={`Marketing ${
										currentVisibleIndexTwo === 2
											? "opacity-100 h-auto"
											: "opacity-0 h-0"
									} transition-opacity duration-700`}
								>
									<div className="w-full min-h-[600px] xl:flex-row flex-col flex items-center gap-10">
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="min-h-[600px] justify-between relative flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																BrightWave Marketing
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of unique design projects that
															blend creativity and technical finesse. Lorem,
															ipsum dolor sit amet consectetur adipisicing elit.
															Vero, at.
														</p>
													</div>
													<div className="w-full flex flex-wrap items-center  gap-3">
														<div className="flex gap-3 items-center min-w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5] w-[90px]">
																Adarsh Gupta
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center min-w-[160px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Digital Marketing
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center min-w-[240px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Campaign Management
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																SEO
															</span>
														</div>
													</div>
													<div className="w-full border flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image1}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image2}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="min-h-[600px] justify-between relative flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																SmartAds Solutions
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of unique AI-driven marketing
															projects that blend creativity and technical
															finesse. Our projects are tailored to the
															fast-growing Indian AI sector.
														</p>
													</div>
													<div className="w-full flex items-center  flex-wrap gap-3">
														<div className="flex gap-3 items-center  justify-center w-[170px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																FutureTech
															</span>
														</div>
														<div className="flex gap-3 items-center  min-w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																AI & Automation
															</span>
														</div>
														<div className="flex gap-3 items-center  justify-center min-w-[250px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Marketing Automation
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Analytics
															</span>
														</div>
													</div>
													<div className="w-full border  flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl  ">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image3}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image4}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>
								<div
									className={`Management ${
										currentVisibleIndexTwo === 3
											? "opacity-100 h-auto"
											: "opacity-0 h-0"
									} transition-opacity duration-700`}
								>
									<div className="w-full min-h-[600px] xl:flex-row flex-col flex items-center gap-10">
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="min-h-[600px] justify-between relative w-full flex flex-col sm:p-8 p-3 gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																Apex Solutions
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of innovative management
															projects that blend strategic planning and
															operational excellence. Our projects cater to the
															dynamic needs of the Indian market.
														</p>
													</div>
													<div className="w-full flex flex-wrap items-center  gap-3">
														<div className="flex gap-3 items-center min-w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5] min-w-[90px]">
																Apex Solutions
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center min-w-[160px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Business Consulting
															</span>{" "}
														</div>
														<div className="flex gap-3 items-center min-w-[240px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Strategy
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Operations
															</span>
														</div>
													</div>
													<div className="w-full border flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image1}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 w-full rounded-xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image2}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
										<div className="w-full xl:w-1/2">
											<ScrollAnimation variants={fadeInUp}>
												<div className="min-h-[600px] justify-between relative w-full flex flex-col sm:p-8 p-3  gap-5 bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
													<div className="flex flex-col gap-5">
														<div className="w-full h-[60px] flex justify-between items-center">
															<h4 className="text-[20px] text-[#ccfffa]">
																Synergy Consultants
															</h4>
														</div>
														<p className="text-[#649B9B] text-[14px]">
															Explore a showcase of innovative management
															projects that leverage technology and strategic
															insights. Our projects cater to the evolving needs
															of the Indian market.
														</p>
													</div>
													<div className="w-full flex items-center  flex-wrap gap-3">
														<div className="flex gap-3 items-center  justify-center min-w-[170px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Client
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Synergy Consultants
															</span>
														</div>
														<div className="flex gap-3 items-center  min-w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Category
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Process Automation
															</span>
														</div>
														<div className="flex gap-3 items-center  justify-center min-w-[250px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
															<span className="text-[12px] text-[#649B9B]">
																Work
															</span>
															<svg
																width="4"
																height="4"
																viewBox="0 0 4 4"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle cx="2" cy="2" r="2" fill="#507C7C" />
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Strategy
															</span>
															<svg
																width="20"
																height="20"
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
																	fill="#1AFFE9"
																/>
															</svg>
															<span className="text-[12px] text-[#99FFF5]">
																Data Analytics
															</span>
														</div>
													</div>
													<div className="w-full border  flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl  ">
														<div className="flex gap-5 flex-col md:flex-row justify-between">
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image3}
																	alt=""
																/>
															</div>
															<div className="md:w-1/2 rounded-3xl h-[230px] overflow-hidden">
																<Image
																	width={50000}
																	className="object-cover h-[230px]"
																	height={50000}
																	src={Image4}
																	alt=""
																/>
															</div>
														</div>
													</div>
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>{" "}
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div id="aboutUs" className="pt-24 px-2 sm:px-8 w-full relative">
						<div className="w-[85%] mx-auto flex flex-col items-center gap-5">
							<h1 className="sm:text-[38px] text-[28px] text-[#E5FFFD] text-center">
								Meet Our Experts
							</h1>
							<p className="text-[#507C7C] text-[16px] text-center">
								At DevXplore, we pride ourselves on our dedicated team of
								professionals who are committed to delivering top-notch web and
								mobile app solutions. Our team consists of experts in various
								fields:
							</p>
						</div>
						<div className="w-full min-h-96 overflow-hidden justify-center items-center flex flex-wrap mt-10 px-5 gap-10">
							<ScrollAnimation variants={slideInLeft}>
								<div className="flex flex-col gap-10 max-w-[440px] min-h-[360px] overflow-hidden rounded-2xl border border-[#00393d] teambg">
									<div className="w-full h-[130px]  bg-transparent bg-gradient-to-b from-[#00313560] to-[#000e0f] flex  justify-center relative">
										<div className="w-[100px] h-[100px] rounded-full border-[6px] border-[#00393d] overflow-hidden absolute bottom-[-25px]">
											<Image
												alt="Zaman Image"
												src={zaman}
												width={500}
												height={500}
												className="w-[100px] h-[100px] rounded-full object-cover "
											></Image>
										</div>
									</div>
									<div className=" flex flex-col px-4 py-4 gap-4 justify-center items-center text-[#ccfffa]">
										<span>Ahtesham Zaman</span>
										<span className="text-[#649B9B] text-center">
											Co-Founder · Software Developer
										</span>
										<p className="text-[13px] text-center">
											Co-Founder and frontend developer with 4+ years of
											experience, creating bespoke web and mobile solutions with
											technical expertise and innovation.
										</p>
									</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation variants={scaleUpVariants}>
								<div className="flex flex-col gap-10 max-w-[440px] min-h-[360px] overflow-hidden rounded-2xl border border-[#00393d] teambg">
									<div className="w-full h-[130px] bg-transparent bg-gradient-to-b from-[#00313560] to-[#000e0f] flex  justify-center relative">
										<div className="w-[100px] h-[100px] rounded-full border-[6px] border-[#00393d] overflow-hidden absolute bottom-[-25px]">
											<Image
												alt="Aman Image"
												src={arshad}
												width={500}
												height={500}
												className="w-[100px] h-[100px] rounded-full object-cover object-top"
											></Image>
										</div>
									</div>
									<div className=" flex flex-col px-4 py-4 gap-4 justify-center items-center text-[#ccfffa]">
										<span>Arshad Aman</span>
										<span className="text-[#649B9B] text-center">
											Co-Founder · Software Developer
										</span>
										<p className="text-[13px] text-center">
											Co-Founder and backend developer with 5+ years of
											experience, excelling in problem-solving and precision for
											high-quality, client-focused project execution.
										</p>
									</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation variants={slideInRight}>
								<div className="flex flex-col gap-10 max-w-[440px] min-h-[360px] overflow-hidden rounded-2xl border border-[#00393d] teambg">
									<div className="w-full h-[130px] bg-transparent bg-gradient-to-b from-[#00313560] to-[#000e0f] flex  justify-center relative">
										<div className="w-[100px] h-[100px] rounded-full border-[6px] border-[#00393d] overflow-hidden absolute bottom-[-25px]">
											<Image
												alt="Suchi Image"
												src={suchi}
												width={500}
												height={500}
												className="w-[100px] h-[100px] rounded-full object-cover object-bottom"
											></Image>
										</div>
									</div>
									<div className=" flex flex-col px-4 py-4 gap-4 justify-center items-center text-[#ccfffa]">
										<span>Sucharita Mohanty</span>
										<span className="text-[#649B9B] text-center">
											Co-Founder & UI, UX Designer
										</span>
										<p className="text-[13px] text-center">
											Co-Founder and UI/UX designer with 4+ years of experience,
											crafting intuitive, visually appealing interfaces to
											enhance user experience creatively and insightfully.
										</p>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div className="pt-24 px-2 sm:px-8 w-full relative">
						<div className="w-full min-h-[400px] flex flex-col gap-5 py-8">
							<div className="w-[85%] mx-auto flex flex-col items-center gap-5">
								<h1 className="sm:text-[38px] text-[28px] text-[#E5FFFD] text-center">
									Client Stories: Voices of Satisfaction
								</h1>
								<p className="text-[#507C7C] text-[16px] text-center">
									Dive into a collection of testimonials that speak to the
									impact of DevXplore. Our clients share their journey,
									highlighting the excellence, reliability, and transformative
									experiences theyve encountered working with us.
								</p>
							</div>
							<div className="w-full h-fit overflow-hidden items-center">
								<div className="relative w-fit">
									<div
										className="flex gap-4 transition-transform duration-500 ease-in-out"
										style={{
											transform: `translateX(-${currentIndex * itemWidth}px)`,
										}}
									>
										{testimonials.map((testimonial, index) => (
											<div
												key={index}
												className="h-full min-w-[330px] flex-shrink-0"
											>
												<div className="flex flex-col justify-between gap-2  transition-all duration-200  sm:h-[290px] border border-[#00393D] rounded-2xl p-5 hover:bg-gradient-to-b from-[#00393d9a] to-transparent">
													<div className="w-full h-[70px] flex items-center gap-3">
														<Image
															className="rounded-[50%] w-12 h-12 object-cover"
															width={1000}
															height={1000}
															src={testimonial.image}
															alt=""
														/>
														<div className="flex flex-col justify-center gap-1">
															<h3 className="text-[#CCFFFA] sm:text-[16px] text-sm">
																{testimonial.name}
															</h3>
															<span className="text-xs sm:text-[14px] text-[#507C7C]">
																{testimonial.title}
															</span>
														</div>
													</div>
													<p className="md:text-[14px] text-[12px] text-[#649B9B] min-h-[100px] text-wrap w-[310px]">
														{testimonial.quote}
													</p>
													<div className="h-[30px] flex gap-2 items-center">
														⭐⭐⭐⭐⭐
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="w-full flex justify-between  items-center mt-8 ">
									<div className="w-[300px] h-full flex-col flex gap-1 justify-center z-20">
										<span className="text-[#507C7C] text-[12px] sm:text-[15px]">
											Worked with
										</span>
										<span className="text-[#CCFFFA] text-[13px] sm:text-[16px]">
											132+ Companies Worldwide
										</span>
									</div>
									<div className="buttons z-20 gap-1 items-center min-w-[130px] h-[55px] rounded-full border-[#00393D] p-2 border flex justify-between">
										<button onClick={handlePrevClick}>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<path
													d="M28.5 13L23.5 18L28.5 23"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
										<button onClick={handleNextClick}>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													fill="url(#paint0_linear_1_597)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="url(#paint1_radial_1_597)"
												/>
												<path
													d="M23.5 13L28.5 18L23.5 23"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_597"
														x1="58.898"
														y1="-13.0909"
														x2="2.11379"
														y2="20.033"
														gradientUnits="userSpaceOnUse"
													>
														<stop offset="0.238871" stopColor="#003033" />
														<stop
															offset="1"
															stopColor="#001D1F"
															stopOpacity="0"
														/>
													</linearGradient>
													<radialGradient
														id="paint1_radial_1_597"
														cx="0"
														cy="0"
														r="1"
														gradientUnits="userSpaceOnUse"
														gradientTransform="translate(25.7347 36) rotate(-90) scale(10.8 15.6)"
													>
														<stop stopColor="#00998A" />
														<stop
															offset="0.597922"
															stopColor="#00998A"
															stopOpacity="0"
														/>
													</radialGradient>
												</defs>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 lg:block hidden w-[250px] h-full bg-gradient-to-r from-[#000e0f] to-transparent left-0"></div>
						<div className="absolute bottom-0 lg:block hidden w-[250px] h-full bg-gradient-to-l from-[#000e0f] to-transparent right-0"></div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div className="flex flex-col items-center pt-24 w-full sm:max-w-[2000px] min-h-[650px] mx-auto gap-10 relative py-10 showCaseBg3 transition-all duration-1000">
						<div className="w-full p-5 mx-auto flex flex-col items-center gap-5">
							<h1 className="text-[28px] sm:text-[38px] text-[#E5FFFD] text-center">
								Common Queries, Clear Answers
							</h1>
							<p className="text-[#507C7C] text-[16px] text-center">
								We believe in transparency and aim to provide you with all the
								information you need to make informed decisions about our
								services.
							</p>
						</div>
						<div className="w-full flex flex-col my-5 gap-4 xl:flex-row px-5 sm:px-10">
							<div className="w-full gap-4 flex flex-col items-center">
								<div onClick={toggleVisibility1} className="cursor-pointer max-w-[750px] min-h-[60px] p-5 border relative rounded-3xl gap-2 flex  border-[#002629] transition-all items-center">
									<div className="flex flex-col">
										<h4 className="font-semibold text-[#CCFFFA] w-[85%]">
											How long does it take to complete a web development
											project?
										</h4>
										<p
											className={`text-[16px] text-[#507C7C] ${
												isHidden1
													? "opacity-0 max-h-0 mt-0"
													: "opacity-100 max-h-[200px] mt-5"
											} transition-all duration-1000`}
										>
											The timeline varies depending on the project s complexity
											and requirements. Our team strives to deliver projects on
											time while maintaining the highest quality standards.
										</p>
									</div>
									<button
										onClick={toggleVisibility1}
										className={`hide absolute top-[15px] right-5  ${
											isHidden1 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-700`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1666H14.1667C13.9457 19.1666 13.7337 19.2544 13.5774 19.4107C13.4211 19.567 13.3333 19.7789 13.3333 20C13.3333 20.221 13.4211 20.4329 13.5774 20.5892C13.7337 20.7455 13.9457 20.8333 14.1667 20.8333H25.8333C26.0543 20.8333 26.2663 20.7455 26.4226 20.5892C26.5789 20.4329 26.6667 20.221 26.6667 20C26.6667 19.7789 26.5789 19.567 26.4226 19.4107C26.2663 19.2544 26.0543 19.1666 25.8333 19.1666Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
									<button
										onClick={toggleVisibility1}
										className={`Show absolute top-[15px] right-5 ${
											isHidden1 ? "opacity-100 h-auto" : "opacity-0 h-0"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1667H20.8333V14.1667C20.8333 13.9457 20.7455 13.7337 20.5893 13.5775C20.433 13.4212 20.221 13.3334 20 13.3334C19.779 13.3334 19.567 13.4212 19.4107 13.5775C19.2545 13.7337 19.1667 13.9457 19.1667 14.1667V19.1667H14.1667C13.9457 19.1667 13.7337 19.2545 13.5774 19.4108C13.4211 19.5671 13.3333 19.779 13.3333 20C13.3333 20.2211 13.4211 20.433 13.5774 20.5893C13.7337 20.7456 13.9457 20.8334 14.1667 20.8334H19.1667V25.8334C19.1667 26.0544 19.2545 26.2663 19.4107 26.4226C19.567 26.5789 19.779 26.6667 20 26.6667C20.221 26.6667 20.433 26.5789 20.5893 26.4226C20.7455 26.2663 20.8333 26.0544 20.8333 25.8334V20.8334H25.8333C26.0543 20.8334 26.2663 20.7456 26.4226 20.5893C26.5789 20.433 26.6667 20.2211 26.6667 20C26.6667 19.779 26.5789 19.5671 26.4226 19.4108C26.2663 19.2545 26.0543 19.1667 25.8333 19.1667Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
								</div>
								<div onClick={toggleVisibility2} className="cursor-pointer max-w-[750px] min-h-[60px] p-5 border relative rounded-3xl gap-2 flex  border-[#002629] transition-all items-center">
									<div className="flex flex-col">
										<h4 className="md:font-semibold text-[#CCFFFA] w-[85%]">
											Can you handle large-scale mobile app development
											projects?
										</h4>
										<p
											className={`text-[16px] text-[#507C7C] ${
												isHidden2
													? "opacity-0 max-h-0 mt-0"
													: "opacity-100 max-h-[200px] mt-5"
											} transition-all duration-700`}
										>
											Yes, our team is equipped to manage and execute
											large-scale mobile app projects, ensuring scalability and
											robust performance.
										</p>
									</div>
									<button
										onClick={toggleVisibility2}
										className={`hide absolute top-[15px] right-5 ${
											isHidden2 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1666H14.1667C13.9457 19.1666 13.7337 19.2544 13.5774 19.4107C13.4211 19.567 13.3333 19.7789 13.3333 20C13.3333 20.221 13.4211 20.4329 13.5774 20.5892C13.7337 20.7455 13.9457 20.8333 14.1667 20.8333H25.8333C26.0543 20.8333 26.2663 20.7455 26.4226 20.5892C26.5789 20.4329 26.6667 20.221 26.6667 20C26.6667 19.7789 26.5789 19.567 26.4226 19.4107C26.2663 19.2544 26.0543 19.1666 25.8333 19.1666Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
									<button
										onClick={toggleVisibility2}
										className={`Show absolute top-[15px] right-5 ${
											isHidden2 ? "opacity-100 h-auto" : "opacity-0 h-0"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1667H20.8333V14.1667C20.8333 13.9457 20.7455 13.7337 20.5893 13.5775C20.433 13.4212 20.221 13.3334 20 13.3334C19.779 13.3334 19.567 13.4212 19.4107 13.5775C19.2545 13.7337 19.1667 13.9457 19.1667 14.1667V19.1667H14.1667C13.9457 19.1667 13.7337 19.2545 13.5774 19.4108C13.4211 19.5671 13.3333 19.779 13.3333 20C13.3333 20.2211 13.4211 20.433 13.5774 20.5893C13.7337 20.7456 13.9457 20.8334 14.1667 20.8334H19.1667V25.8334C19.1667 26.0544 19.2545 26.2663 19.4107 26.4226C19.567 26.5789 19.779 26.6667 20 26.6667C20.221 26.6667 20.433 26.5789 20.5893 26.4226C20.7455 26.2663 20.8333 26.0544 20.8333 25.8334V20.8334H25.8333C26.0543 20.8334 26.2663 20.7456 26.4226 20.5893C26.5789 20.433 26.6667 20.2211 26.6667 20C26.6667 19.779 26.5789 19.5671 26.4226 19.4108C26.2663 19.2545 26.0543 19.1667 25.8333 19.1667Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
								</div>
								<div onClick={toggleVisibility3} className="cursor-pointer max-w-[750px] min-h-[60px] p-5 border relative rounded-3xl gap-2 flex  border-[#002629] transition-all items-center">
									<div className="flex flex-col">
										<h4 className="md:font-semibold text-[#CCFFFA] w-[85%]">
											Do you offer maintenance services for websites and apps
											developed by other companies?
										</h4>
										<p
											className={`text-[16px] text-[#507C7C] ${
												isHidden3
													? "opacity-0 max-h-0 mt-0"
													: "opacity-100 max-h-[200px] mt-5"
											} transition-all duration-700`}
										>
											We offer maintenance services for all websites and apps,
											including updates, bug fixes, and security audits,
											regardless of the original developer.
										</p>
									</div>
									<button
										onClick={toggleVisibility3}
										className={`hide absolute top-[15px] right-5 ${
											isHidden3 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1666H14.1667C13.9457 19.1666 13.7337 19.2544 13.5774 19.4107C13.4211 19.567 13.3333 19.7789 13.3333 20C13.3333 20.221 13.4211 20.4329 13.5774 20.5892C13.7337 20.7455 13.9457 20.8333 14.1667 20.8333H25.8333C26.0543 20.8333 26.2663 20.7455 26.4226 20.5892C26.5789 20.4329 26.6667 20.221 26.6667 20C26.6667 19.7789 26.5789 19.567 26.4226 19.4107C26.2663 19.2544 26.0543 19.1666 25.8333 19.1666Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
									<button
										onClick={toggleVisibility3}
										className={`Show absolute top-[15px] right-5  ${
											isHidden3 ? "opacity-100 h-auto" : "opacity-0 h-0"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1667H20.8333V14.1667C20.8333 13.9457 20.7455 13.7337 20.5893 13.5775C20.433 13.4212 20.221 13.3334 20 13.3334C19.779 13.3334 19.567 13.4212 19.4107 13.5775C19.2545 13.7337 19.1667 13.9457 19.1667 14.1667V19.1667H14.1667C13.9457 19.1667 13.7337 19.2545 13.5774 19.4108C13.4211 19.5671 13.3333 19.779 13.3333 20C13.3333 20.2211 13.4211 20.433 13.5774 20.5893C13.7337 20.7456 13.9457 20.8334 14.1667 20.8334H19.1667V25.8334C19.1667 26.0544 19.2545 26.2663 19.4107 26.4226C19.567 26.5789 19.779 26.6667 20 26.6667C20.221 26.6667 20.433 26.5789 20.5893 26.4226C20.7455 26.2663 20.8333 26.0544 20.8333 25.8334V20.8334H25.8333C26.0543 20.8334 26.2663 20.7456 26.4226 20.5893C26.5789 20.433 26.6667 20.2211 26.6667 20C26.6667 19.779 26.5789 19.5671 26.4226 19.4108C26.2663 19.2545 26.0543 19.1667 25.8333 19.1667Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
								</div>
								<div onClick={toggleVisibility4} className="cursor-pointer max-w-[750px] min-h-[60px] p-5 border relative rounded-3xl gap-2 flex  border-[#002629] transition-all items-center">
									<div className="flex flex-col">
										<h4 className="md:font-semibold text-[#CCFFFA] w-[85%]">
											How do you ensure the security of user data in your web
											applications?
										</h4>
										<p
											className={`text-[16px] text-[#507C7C] ${
												isHidden4
													? "opacity-0 max-h-0"
													: "mt-5 opacity-100 max-h-[200px]"
											} transition-all duration-700`}
										>
											We prioritize user data security by implementing SSL/TLS
											encryption, regular security audits, and secure coding
											practices to safeguard against threats.
										</p>
									</div>
									<button
										onClick={toggleVisibility4}
										className={`hide absolute top-[15px] right-5  ${
											isHidden4 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1666H14.1667C13.9457 19.1666 13.7337 19.2544 13.5774 19.4107C13.4211 19.567 13.3333 19.7789 13.3333 20C13.3333 20.221 13.4211 20.4329 13.5774 20.5892C13.7337 20.7455 13.9457 20.8333 14.1667 20.8333H25.8333C26.0543 20.8333 26.2663 20.7455 26.4226 20.5892C26.5789 20.4329 26.6667 20.221 26.6667 20C26.6667 19.7789 26.5789 19.567 26.4226 19.4107C26.2663 19.2544 26.0543 19.1666 25.8333 19.1666Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
									<button
										onClick={toggleVisibility4}
										className={`Show absolute top-[15px] right-5  ${
											isHidden4 ? "opacity-100 h-auto" : "opacity-0 h-0"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1667H20.8333V14.1667C20.8333 13.9457 20.7455 13.7337 20.5893 13.5775C20.433 13.4212 20.221 13.3334 20 13.3334C19.779 13.3334 19.567 13.4212 19.4107 13.5775C19.2545 13.7337 19.1667 13.9457 19.1667 14.1667V19.1667H14.1667C13.9457 19.1667 13.7337 19.2545 13.5774 19.4108C13.4211 19.5671 13.3333 19.779 13.3333 20C13.3333 20.2211 13.4211 20.433 13.5774 20.5893C13.7337 20.7456 13.9457 20.8334 14.1667 20.8334H19.1667V25.8334C19.1667 26.0544 19.2545 26.2663 19.4107 26.4226C19.567 26.5789 19.779 26.6667 20 26.6667C20.221 26.6667 20.433 26.5789 20.5893 26.4226C20.7455 26.2663 20.8333 26.0544 20.8333 25.8334V20.8334H25.8333C26.0543 20.8334 26.2663 20.7456 26.4226 20.5893C26.5789 20.433 26.6667 20.2211 26.6667 20C26.6667 19.779 26.5789 19.5671 26.4226 19.4108C26.2663 19.2545 26.0543 19.1667 25.8333 19.1667Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
								</div>
								<div onClick={toggleVisibility5} className="max-w-[750px] min-h-[60px] p-5 border relative rounded-3xl gap-2 flex  border-[#002629] transition-all items-center">
									<div className="flex flex-col">
										<h4 className="md:font-semibold text-[#CCFFFA] w-[85%]">
											What is your approach to UI/UX design?
										</h4>
										<p
											className={`text-[16px] text-[#507C7C] ${
												isHidden5
													? "opacity-0 max-h-0"
													: "mt-5 opacity-100 max-h-[200px]"
											} transition-all duration-700`}
										>
											Our UI/UX design process focuses on creating intuitive and
											visually appealing interfaces. We conduct thorough
											research and usability testing to ensure an excellent user
											experience.
										</p>
									</div>
									<button
										onClick={toggleVisibility5}
										className={`hide absolute top-[15px] right-5  ${
											isHidden5 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1666H14.1667C13.9457 19.1666 13.7337 19.2544 13.5774 19.4107C13.4211 19.567 13.3333 19.7789 13.3333 20C13.3333 20.221 13.4211 20.4329 13.5774 20.5892C13.7337 20.7455 13.9457 20.8333 14.1667 20.8333H25.8333C26.0543 20.8333 26.2663 20.7455 26.4226 20.5892C26.5789 20.4329 26.6667 20.221 26.6667 20C26.6667 19.7789 26.5789 19.567 26.4226 19.4107C26.2663 19.2544 26.0543 19.1666 25.8333 19.1666Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
									<button
										onClick={toggleVisibility5}
										className={`Show absolute top-[15px] right-5  ${
											isHidden5 ? "opacity-100 h-auto" : "opacity-0 h-0"
										} transition-opacity duration-1000`}
									>
										<svg
											width="36"
											height="36"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												fill="#00171A"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="39"
												height="39"
												rx="19.5"
												stroke="#00393D"
											/>
											<path
												d="M25.8333 19.1667H20.8333V14.1667C20.8333 13.9457 20.7455 13.7337 20.5893 13.5775C20.433 13.4212 20.221 13.3334 20 13.3334C19.779 13.3334 19.567 13.4212 19.4107 13.5775C19.2545 13.7337 19.1667 13.9457 19.1667 14.1667V19.1667H14.1667C13.9457 19.1667 13.7337 19.2545 13.5774 19.4108C13.4211 19.5671 13.3333 19.779 13.3333 20C13.3333 20.2211 13.4211 20.433 13.5774 20.5893C13.7337 20.7456 13.9457 20.8334 14.1667 20.8334H19.1667V25.8334C19.1667 26.0544 19.2545 26.2663 19.4107 26.4226C19.567 26.5789 19.779 26.6667 20 26.6667C20.221 26.6667 20.433 26.5789 20.5893 26.4226C20.7455 26.2663 20.8333 26.0544 20.8333 25.8334V20.8334H25.8333C26.0543 20.8334 26.2663 20.7456 26.4226 20.5893C26.5789 20.433 26.6667 20.2211 26.6667 20C26.6667 19.779 26.5789 19.5671 26.4226 19.4108C26.2663 19.2545 26.0543 19.1667 25.8333 19.1667Z"
												fill="#1AFFE9"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={fadeInUp}>
					<div
						id="contactUs"
						className="pt-24 w-full gap-10 sm:px-8 p-2 py-10 flex flex-col items-center showCaseBg3 min-h-[700px]"
					>
						<div className="sm:w-[85%] px-5 w-full min-h-[150px] flex flex-col items-center justify-center">
							<h1 className="text-[28px] sm:text-[38px] text-[#E5FFFD] text-center">
								Connect with DevXplore
							</h1>
							<p className="text-[16px] text-[#507C7C] text-center">
								Ready to embark on your digital journey? Reach out to us today.
								Our dedicated team is here to understand your needs, answer your
								queries, and collaborate on bringing your digital aspirations to
								life.
							</p>
						</div>
						<div className="w-full p-4 justify-center lg:flex-row lg:items-start flex-col items-center flex gap-8">
							<div className="lg:w-[60%] w-full relative">
								<form
									onSubmit={handleSubmit}
									className="border-[#00393D] border rounded-3xl sm:p-10 p-4 bg-gradient-to-bl from-[#00171A] to-transparent"
								>
									<div className="w-full h-full flex  flex-col gap-8">
										<div className="w-full gap-10 flex flex-col lg:flex-row justify-between md:items-center">
											<div className="lg:w-1/2 w-full flex flex-col gap-2 h-full">
												<label
													className="text-[#E5FFFD] text-[16px] font-light"
													htmlFor="name"
												>
													Name:
												</label>
												<div className="relative">
													<input
														required
														className="rounded-full w-full pl-14 h-[56px] placeholder:text-sm placeholder:text-[#507C7C] outline-none bg-[#00171A] border-[#00393D] border"
														placeholder="Enter Name"
														type="text"
														name="name"
														value={formData.name}
														onChange={handleChange}
													/>
													<svg
														className="absolute top-2 left-2"
														width="40"
														height="40"
														viewBox="0 0 40 40"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															fill="#001D1F"
														/>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															stroke="#00393D"
														/>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M16.25 15C16.25 12.9289 17.9289 11.25 20 11.25C22.0711 11.25 23.75 12.9289 23.75 15C23.75 17.0711 22.0711 18.75 20 18.75C17.9289 18.75 16.25 17.0711 16.25 15Z"
															fill="#507C7C"
														/>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M13.126 26.7544C13.1905 23.013 16.2433 20 20 20C23.7568 20 26.8097 23.0131 26.874 26.7547C26.8782 27.0028 26.7353 27.23 26.5097 27.3335C24.5273 28.2432 22.3221 28.75 20.0003 28.75C17.6782 28.75 15.4729 28.2431 13.4903 27.3332C13.2647 27.2297 13.1218 27.0026 13.126 26.7544Z"
															fill="#507C7C"
														/>
													</svg>
												</div>
											</div>
											<div className="lg:w-1/2 w-full flex flex-col gap-2 h-full">
												<label
													className="text-[#E5FFFD] text-[16px] font-light"
													htmlFor="email"
												>
													Email:
												</label>
												<div className="relative">
													<input
														required
														className="rounded-full placeholder:text-sm w-full pl-14 h-[56px] placeholder:text-[#507C7C] outline-none bg-[#00171A] border-[#00393D] border"
														placeholder="Enter Email"
														type="email"
														name="email"
														value={formData.email}
														onChange={handleChange}
													/>
													<svg
														className="absolute top-2 left-2"
														width="40"
														height="40"
														viewBox="0 0 40 40"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															fill="#001D1F"
														/>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															stroke="#00393D"
														/>
														<path
															d="M11.25 17.2242V24.375C11.25 25.7557 12.3693 26.875 13.75 26.875H26.25C27.6307 26.875 28.75 25.7557 28.75 24.375V17.2242L21.3102 21.8026C20.5067 22.297 19.4933 22.297 18.6898 21.8026L11.25 17.2242Z"
															fill="#507C7C"
														/>
														<path
															d="M28.75 15.7565V15.625C28.75 14.2443 27.6307 13.125 26.25 13.125H13.75C12.3693 13.125 11.25 14.2443 11.25 15.625V15.7565L19.3449 20.738C19.7466 20.9852 20.2534 20.9852 20.6551 20.738L28.75 15.7565Z"
															fill="#507C7C"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="w-full gap-10 flex flex-col lg:flex-row justify-between md:items-center">
											<div className="lg:w-1/2 w-full flex flex-col gap-2 h-full">
												<label
													className="text-[#E5FFFD] text-[16px] font-light"
													htmlFor="phone"
												>
													Phone:
												</label>
												<div className="relative">
													<input
														className="rounded-full placeholder:text-sm  w-full pl-14 h-[56px] placeholder:text-[#507C7C] outline-none bg-[#00171A] border-[#00393D] border"
														placeholder="Enter Phone Number"
														type="text"
														name="phone"
														value={formData.phone}
														onChange={handleChange}
													/>
													<svg
														className="absolute top-2 left-2"
														width="40"
														height="40"
														viewBox="0 0 40 40"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															fill="#001D1F"
														/>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															stroke="#00393D"
														/>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M11.25 13.75C11.25 12.3693 12.3693 11.25 13.75 11.25H14.893C15.61 11.25 16.235 11.738 16.4089 12.4335L17.3304 16.1195C17.4828 16.7294 17.2549 17.3713 16.752 17.7485L15.674 18.557C15.5621 18.641 15.5377 18.7639 15.5692 18.8497C16.5154 21.4329 18.5671 23.4846 21.1503 24.4308C21.2361 24.4623 21.359 24.4379 21.443 24.326L22.2515 23.248C22.6287 22.7451 23.2706 22.5172 23.8805 22.6696L27.5665 23.5911C28.262 23.765 28.75 24.39 28.75 25.107V26.25C28.75 27.6307 27.6307 28.75 26.25 28.75H24.375C17.1263 28.75 11.25 22.8737 11.25 15.625V13.75Z"
															fill="#507C7C"
														/>
													</svg>
												</div>
											</div>
											<div className="lg:w-1/2 w-full flex flex-col gap-2 h-full">
												<label
													className="text-[#E5FFFD] text-[16px] font-light"
													htmlFor="Services"
												>
													Services:
												</label>
												<div className="relative">
													<select
														required
														id="services"
														name="services"
														value={formData.services}
														onChange={handleChange}
														className="rounded-full w-full pl-14 h-[56px] text-sm  outline-none bg-[#00171A] border-[#00393D] border appearance-none"
													>
														<option
															className="text-[#507C7C]"
															disabled
															value=""
														>
															--Please choose an option--
														</option>
														<option value="Web Development">
															Web Development
														</option>
														<option value="App Development">
															App Development
														</option>
														<option value="Web Design">Web Design</option>
														<option value="App Design">App Design</option>
														<option value="Job Applicant">Job Applicant</option>
													</select>
													<svg
														className="absolute top-2 left-2"
														width="40"
														height="40"
														viewBox="0 0 40 40"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															fill="#001D1F"
														/>
														<rect
															x="0.5"
															y="0.5"
															width="39"
															height="39"
															rx="19.5"
															stroke="#00393D"
														/>
														<path
															d="M11.25 17.2242V24.375C11.25 25.7557 12.3693 26.875 13.75 26.875H26.25C27.6307 26.875 28.75 25.7557 28.75 24.375V17.2242L21.3102 21.8026C20.5067 22.297 19.4933 22.297 18.6898 21.8026L11.25 17.2242Z"
															fill="#507C7C"
														/>
														<path
															d="M28.75 15.7565V15.625C28.75 14.2443 27.6307 13.125 26.25 13.125H13.75C12.3693 13.125 11.25 14.2443 11.25 15.625V15.7565L19.3449 20.738C19.7466 20.9852 20.2534 20.9852 20.6551 20.738L28.75 15.7565Z"
															fill="#507C7C"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="z-20">
											<textarea
												required
												className="rounded-xl p-3 w-full h-[160px] placeholder:text-[#507C7C] outline-none bg-[#00171A] border-[#00393D] border"
												name="message"
												id="message"
												placeholder="Your message..."
												value={formData.message}
												onChange={handleChange}
											></textarea>
										</div>
										<div className="flex justify-center z-20">
											<button
												type="submit"
												className="text-black bg-[#66FFF0] w-[220px] h-[45px] rounded-full border-[#00393D] text-[14px] hover:border hover:text-white hover:bg-[#001112] transition-all duration-300"
											>
												Submit Your Message
											</button>
										</div>
									</div>
								</form>
								<div className="absolute w-full bottom-0 left-0 h-[150px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
							</div>
							<div className=" lg:items-center lg:flex lg:flex-col flex-row justify-center gap-20  hidden">
								<div className="relative">
									<div className="w-full  gap-4 flex flex-col p-5 justify-between items-center border-[#00393D] border  rounded-3xl ">
										<div className="w-full  flex flex-col gap-2 h-full">
											<div className="relative">
												<Link
													href={"mailto:solutions@devxplore.tech"}
													target="_blank"
													className="rounded-full max-w-[330px] pl-14 pr-2 h-[56px] text-[#CCFFFA] text-[14px] flex items-center  outline-none bg-[#00171A] border-[#00393D] border"
												>
													solutions@devxplore.tech
												</Link>
												<svg
													className="absolute top-2 left-2"
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#001D1F"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<path
														d="M11.25 17.2242V24.375C11.25 25.7557 12.3693 26.875 13.75 26.875H26.25C27.6307 26.875 28.75 25.7557 28.75 24.375V17.2242L21.3102 21.8026C20.5067 22.297 19.4933 22.297 18.6898 21.8026L11.25 17.2242Z"
														fill="#1AFFE9"
													/>
													<path
														d="M28.75 15.7565V15.625C28.75 14.2443 27.6307 13.125 26.25 13.125H13.75C12.3693 13.125 11.25 14.2443 11.25 15.625V15.7565L19.3449 20.738C19.7466 20.9852 20.2534 20.9852 20.6551 20.738L28.75 15.7565Z"
														fill="#1AFFE9"
													/>
												</svg>
											</div>
										</div>
										<div className="w-full flex flex-col gap-2 h-full">
											<div className="relative">
												<div className="rounded-full w-[320px] pl-14 h-[56px] text-[#CCFFFA] text-[14px] flex items-center gap-2 outline-none bg-[#00171A] border-[#00393D] border">
													<Link
														className="text-sm"
														href="tel:+9163711 65893"
														target="_blank"
													>
														+91 63711 65893,
													</Link>
													<Link
														className="text-sm"
														href="tel:+9198270 53173"
														target="_blank"
													>
														+91 98270 53173
													</Link>
												</div>
												<svg
													className="absolute top-2 left-2"
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#001D1F"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M11.25 13.75C11.25 12.3693 12.3693 11.25 13.75 11.25H14.893C15.61 11.25 16.235 11.738 16.4089 12.4335L17.3304 16.1195C17.4828 16.7294 17.2549 17.3713 16.752 17.7485L15.674 18.557C15.5621 18.641 15.5377 18.7639 15.5692 18.8497C16.5154 21.4329 18.5671 23.4846 21.1503 24.4308C21.2361 24.4623 21.359 24.4379 21.443 24.326L22.2515 23.248C22.6287 22.7451 23.2706 22.5172 23.8805 22.6696L27.5665 23.5911C28.262 23.765 28.75 24.39 28.75 25.107V26.25C28.75 27.6307 27.6307 28.75 26.25 28.75H24.375C17.1263 28.75 11.25 22.8737 11.25 15.625V13.75Z"
														fill="#1AFFE9"
													/>
												</svg>
											</div>
										</div>
										<div className="w-full flex flex-col gap-2 h-full">
											<div className="relative">
												<div className="rounded-full w-[320px] pl-14 h-[56px] text-[#CCFFFA] text-[14px] flex items-center  outline-none bg-[#00171A] border-[#00393D] border">
													Bhubaneswar, Odisha
												</div>
												<svg
													className="absolute top-2 left-2"
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#001D1F"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M19.6165 28.6259C19.6416 28.6405 19.6614 28.6517 19.6754 28.6596L19.6987 28.6726C19.8844 28.7745 20.1148 28.7738 20.3007 28.6729L20.3246 28.6596C20.3386 28.6517 20.3584 28.6405 20.3835 28.6259C20.4339 28.5967 20.5058 28.5542 20.5963 28.4985C20.7771 28.3872 21.0323 28.223 21.3372 28.0076C21.9459 27.5776 22.7581 26.9395 23.5721 26.1061C25.1922 24.4474 26.875 21.9551 26.875 18.75C26.875 14.953 23.797 11.875 20 11.875C16.203 11.875 13.125 14.953 13.125 18.75C13.125 21.9551 14.8078 24.4474 16.4279 26.1061C17.2419 26.9395 18.0541 27.5776 18.6628 28.0076C18.9677 28.223 19.2229 28.3872 19.4037 28.4985C19.4942 28.5542 19.5661 28.5967 19.6165 28.6259ZM20 21.25C21.3807 21.25 22.5 20.1307 22.5 18.75C22.5 17.3693 21.3807 16.25 20 16.25C18.6193 16.25 17.5 17.3693 17.5 18.75C17.5 20.1307 18.6193 21.25 20 21.25Z"
														fill="#1AFFE9"
													/>
												</svg>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
								</div>
								<div className="relative">
									<div className="w-[350px] min-h-[235px] border border-[#00393D] rounded-3xl flex flex-col gap-3 justify-center items-center">
										<h2 className="text-[20px] text-[#CCFFFA]">Thank You!</h2>
										<span className="text-[16px] text-[#649B9B]">
											Follow Us on Social Media
										</span>
										<div className="w-[50%] h-[55px] rounded-full border border-[#00393D] flex justify-center items-center gap-3">
											<Link href={""}>
												<svg
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#00171A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<g clipPath="url(#clip0_1_812)">
														<path
															d="M30 20C30 14.4771 25.5229 10 20 10C14.4771 10 10 14.4771 10 20C10 24.9912 13.6568 29.1283 18.4375 29.8785V22.8906H15.8984V20H18.4375V17.7969C18.4375 15.2906 19.9305 13.9062 22.2146 13.9062C23.3084 13.9062 24.4531 14.1016 24.4531 14.1016V16.5625H23.1922C21.95 16.5625 21.5625 17.3334 21.5625 18.125V20H24.3359L23.8926 22.8906H21.5625V29.8785C26.3432 29.1283 30 24.9912 30 20Z"
															fill="#1AFFE9"
														/>
													</g>
													<defs>
														<clipPath id="clip0_1_812">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(10 10)"
															/>
														</clipPath>
													</defs>
												</svg>
											</Link>
											<Link href={""}>
												<svg
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#00171A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<g clipPath="url(#clip0_1_815)">
														<path
															d="M16.2918 28.1251C23.8371 28.1251 27.9652 21.8724 27.9652 16.4517C27.9652 16.2759 27.9613 16.0962 27.9535 15.9204C28.7566 15.3397 29.4496 14.6203 30 13.7962C29.2521 14.129 28.458 14.3463 27.6449 14.4407C28.5011 13.9275 29.1421 13.1213 29.4492 12.1716C28.6438 12.6489 27.763 12.9856 26.8445 13.1673C26.2257 12.5098 25.4075 12.0744 24.5164 11.9285C23.6253 11.7826 22.711 11.9343 21.9148 12.3602C21.1186 12.7861 20.4848 13.4624 20.1115 14.2845C19.7382 15.1067 19.6462 16.029 19.8496 16.9087C18.2187 16.8269 16.6233 16.4032 15.1667 15.6652C13.71 14.9272 12.4247 13.8913 11.3941 12.6247C10.8703 13.5278 10.71 14.5965 10.9459 15.6135C11.1817 16.6306 11.7959 17.5197 12.6637 18.1001C12.0122 18.0794 11.375 17.904 10.8047 17.5884V17.6392C10.8041 18.5869 11.1317 19.5056 11.7319 20.2391C12.3321 20.9726 13.1678 21.4756 14.0969 21.6626C13.4934 21.8277 12.86 21.8518 12.2457 21.7329C12.5079 22.548 13.018 23.2609 13.7048 23.7721C14.3916 24.2833 15.2209 24.5673 16.077 24.5845C14.6237 25.726 12.8285 26.3452 10.9805 26.3423C10.6527 26.3418 10.3253 26.3217 10 26.2821C11.8774 27.4866 14.0613 28.1263 16.2918 28.1251Z"
															fill="#1AFFE9"
														/>
													</g>
													<defs>
														<clipPath id="clip0_1_815">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(10 10)"
															/>
														</clipPath>
													</defs>
												</svg>
											</Link>
											<Link href={""}>
												<svg
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														fill="#00171A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="39"
														height="39"
														rx="19.5"
														stroke="#00393D"
													/>
													<g clipPath="url(#clip0_1_818)">
														<path
															d="M28.5195 10H11.4766C10.6602 10 10 10.6445 10 11.4414V28.5547C10 29.3516 10.6602 30 11.4766 30H28.5195C29.3359 30 30 29.3516 30 28.5586V11.4414C30 10.6445 29.3359 10 28.5195 10ZM15.9336 27.043H12.9648V17.4961H15.9336V27.043ZM14.4492 16.1953C13.4961 16.1953 12.7266 15.4258 12.7266 14.4766C12.7266 13.5273 13.4961 12.7578 14.4492 12.7578C15.3984 12.7578 16.168 13.5273 16.168 14.4766C16.168 15.4219 15.3984 16.1953 14.4492 16.1953ZM27.043 27.043H24.0781V22.4023C24.0781 21.2969 24.0586 19.8711 22.5352 19.8711C20.9922 19.8711 20.7578 21.0781 20.7578 22.3242V27.043H17.7969V17.4961H20.6406V18.8008H20.6797C21.0742 18.0508 22.043 17.2578 23.4844 17.2578C26.4883 17.2578 27.043 19.2344 27.043 21.8047V27.043Z"
															fill="#1AFFE9"
														/>
													</g>
													<defs>
														<clipPath id="clip0_1_818">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(10 10)"
															/>
														</clipPath>
													</defs>
												</svg>
											</Link>
										</div>
									</div>
									<div className="w-full bottom-0 left-0 absolute bg-gradient-to-t from-[#000e0f] to-transparent h-[40px]"></div>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
}
