"use client";
import { useEffect, useRef } from "react";
import spinner from "@/public/spinner.svg";
import Image from "next/image";
import whatsapp from "@/public/whatsapp.svg";

const RotatingBox = () => {
	const boxRef = useRef(null);

	useEffect(() => {
		const handleScroll = (event) => {
			if (boxRef.current) {
				const rotation = (window.scrollY / 12) % 360;
				boxRef.current.style.transform = `rotate(${rotation}deg)`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex justify-center items-center relative">
			<div
				ref={boxRef}
				className="w-32 h-32 flex justify-center items-center rounded-full "
			>
				<Image src={spinner} width={500} height={500} alt="" />
			</div>
			<Image
				src={whatsapp}
				className="absolute w-14 h-14"
				alt={""}
				width={100}
				height={500}
			/>
		</div>
	);
};

export default RotatingBox;
