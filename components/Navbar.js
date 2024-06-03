"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [opened, setOpened] = useState(false);
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<nav className="h-[90px] w-full  flex justify-between items-center px-16 absolute z-30">
				<Link href={"/"}>
					<Image src={Logo} alt="hello world" />
				</Link>
				<div className="max-w-[500px] h-[60px] px-2 lg:flex justify-center items-center bg-[#001719] border border-[#00393d] rounded-full hidden">
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
				{/* <div className="">
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
				</div> */}
				
			</nav>
		</>
	);
};

export default Navbar;
