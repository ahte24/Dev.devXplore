"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import hamburger from "@/public/hamburger.svg";
import close from "@/public/close.svg";
import { useState } from "react";
const Navbar = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [opened, setOpened] = useState(false);
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	const [isHidden, setIsHidden] = useState(true);
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};
	return (
		<>
			<div className="sticky top-0 z-30">
				<nav className="h-[90px] w-full  flex justify-between items-center px-[20px] absolute">
					<Link href={"/"} className="">
						<Image src={Logo} alt="hello world" />
					</Link>
					<div className="max-w-[500px] h-[60px] px-2 md:flex justify-center items-center bg-[#000e0f] border border-[#00393d] rounded-full hidden">
						<ul className="flex justify-evenly w-[490px] items-center transition-all">
							<div className="w-[100px] flex justify-center items-center">
								<Link
									href={"/"}
									className="hover:text-white text-[#649B9B] w-[70px] transition-all duration-200 h-[40px] py-3 px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
								>
									<div className="text-sm font-medium leading-[21px]">Home</div>
								</Link>
							</div>
							<div className="w-[100px] flex justify-center items-center">
								<Link
									href={"/"}
									className="hover:text-white text-[#649B9B] min-w-[72px] transition-all duration-200 h-[40px] py-3 px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
								>
									<div className="text-sm font-medium leading-[21px] ">
										Services
									</div>
								</Link>
							</div>
							<div className="w-[100px] flex justify-center items-center">
								<Link
									href={"/"}
									className="hover:text-white text-[#649B9B] min-w-[79px] transition-all duration-200 h-[40px] py-3 px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
								>
									<div className="text-sm font-medium leading-[21px]">
										Projects
									</div>
								</Link>
							</div>
							<div className="w-[100px] flex justify-center items-center">
								<Link
									href={"/"}
									className="hover:text-white text-[#649B9B] min-w-[79px] transition-all duration-200 h-[40px] py-3 px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
								>
									<div className="text-sm font-medium leading-[21px]">
										About Us
									</div>
								</Link>
							</div>
							<div className="w-[100px] flex justify-center items-center">
								<Link
									href={"/"}
									className="hover:text-white text-[#649B9B] min-w-[82px] transition-all duration-200 h-[40px] py-3 px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
								>
									<div className="text-sm font-medium leading-[21px]">
										Contact Us
									</div>
								</Link>
							</div>
						</ul>
					</div>
						<button
							className={`md:hidden absolute right-[40px]  top-[28px]  ${
								isHidden ? "opacity-100 h-auto" : "opacity-0 h-0"
							} transition-opacity duration-1000`}
							onClick={toggleVisibility}
						>
							<Image width={30} height={30} src={hamburger} alt="" />
						</button>
						<button
							className={`md:hidden absolute  right-[40px] top-[28px] z-20 ${
								isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
							} transition-opacity duration-1000`}
							onClick={toggleVisibility}
						>
							<Image width={30} height={30} src={close} alt="" />
						</button>
					<div className="hidden">
						<label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
							<input
								type="checkbox"
								checked={isChecked}
								onChange={handleCheckboxChange}
								className="sr-only"
							/>

							<span
								className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 border border-teal-700 ${
									isChecked ? "bg-[#f6ffff]" : "bg-[#003a3f]"
								}`}
							>
								<span
									className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
										isChecked ? "translate-x-[28px]" : "bg-[#003a3f]"
									}`}
								></span>
							</span>
						</label>
					</div>
				</nav>
				<div
					onClick={toggleVisibility}
					className={`w-full left-0 bg-black transition-all border-b z-10 border-[#00393d] backdrop-filter backdrop-blur-md bg-opacity-20 absolute ${
						isHidden
							? " transition-all  duration-1000 transform-y-full"
							: "transition-all top-[0] duration-500 transform-y-0"
					} top-[-260px]`}
				>
					<div>
						<ul className=" gap-[10px] p-4 flex flex-col items-center justify-center ">
							<Link
								href={"/"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Home
							</Link>
							<Link
								href={"/services"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Services
							</Link>

							<Link
								href={"/projects"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Projects
							</Link>

							<Link
								href={"/about"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								About Us
							</Link>

							<Link
								href={"/contact"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Contact Us
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
