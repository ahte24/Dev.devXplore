import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="xl:px-10 px-2 mt-20">
			<div className="relative rounded-t-3xl max-h-[850px] max-w-full overflow-hidden border-[#002629] border border-b-[#000e0f] flex justify-center">
				<div className="w-full bg-[#011212] h-[16px] overflow-hidden absolute top-0">
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
				<div className="w-[16px] bg-[#011212] h-full absolute right-0 overflow-hidden">
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
								<stop offset="0.742191" stopColor="#002629" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="w-[16px] bg-[#011212] h-full absolute left-0 overflow-hidden">
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
								<stop offset="0.742191" stopColor="#002629" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="flex flex-col w-full px-5 pt-5 items-center servicesBg border-[#002629]   mt-[16px] mx-[16px] rounded-t-3xl border bg-[#000e0f]">
					<div className="w-[97%] max-h-[850px] justify-center flex items-center gap-5">
						<div className="xl:w-[40%] w-[29%] text-6xl text-[#ccfffa] h-full justify-center items-center hidden xl:flex">
							DevXplore
						</div>
						<div className="xl:w-[60%] w-full h-full flex gap-2 pt-4 flex-col md:flex-row xl:flex-col  items-center justify-between xl:justify-end xl:pl-10">
							<div className="w-full h-[300px] 2xl:flex justify-between gap-5 items-center  hidden">
								<div className="w-1/3 h-full p-4 items-center flex flex-col ">
									<div className="w-[70%] flex flex-col gap-4">
										<div className="">
											<h4>Home</h4>
										</div>
										<div className="flex flex-col  gap-3">
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												testimonial
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												FAQ’s{" "}
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Why Us?
											</Link>
										</div>
									</div>
								</div>
								<div className="w-1/3 h-full p-4 flex flex-col items-center">
									<div className="w-[70%] flex flex-col gap-4">
										<div className="">
											<h4>Services</h4>
										</div>
										<div className="flex flex-col  gap-3">
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												UI UX Design
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Development
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Project Management
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Graphic Design
											</Link>
										</div>
									</div>
								</div>
								<div className="w-1/3 h-full p-4 flex flex-col items-center">
									<div className="w-[70%] flex flex-col gap-4">
										<div className="">
											<h4>Others</h4>
										</div>
										<div className="flex flex-col  gap-3">
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Company
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Clients
											</Link>
											<Link href={"#"} className="text-[16px] text-[#507C7C]">
												Projects
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-center gap-5 items-center sm:flex-row flex-col w-full mb-3 relative">
								<div className="  2xl:hidden block">
									<div className="min-w-[270px] min-h-[220px] gap-4 flex flex-col p-2 justify-between items-center border-[#00393D] border  rounded-3xl ">
										<div className="w-full  flex flex-col gap-2 h-full">
											<div className="relative">
												<Link
													href={"mailto:solutions@devxplore.tech"}
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
												<Link
													href="tel:+916371165893"
													target="_blank"
													className="rounded-full max-w-[330px] pl-14 h-[56px] text-[#CCFFFA] text-[14px] flex items-center  outline-none bg-[#00171A] border-[#00393D] border"
												>
													+91 63711 65893
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
												<div className="rounded-full max-w-[330px] pl-14 h-[56px] text-[#CCFFFA] text-[14px] flex items-center  outline-none bg-[#00171A] border-[#00393D] border">
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
								</div>
								<div className=" 2xl:hidden block ">
									<div className="min-w-[270px] min-h-[220px] border border-[#00393D] rounded-3xl flex flex-col gap-3 justify-center items-center">
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
								</div>
									<div className="w-full bottom-0 left-0 absolute bg-gradient-to-t from-[#000e0f] to-transparent h-[40px]"></div>
							</div>
							<div className="w-full h-[150px] border-t border-x rounded-t-3xl border-[#00393D] xl:flex items-center hidden">
								<div className="w-1/3 h-full p-2 flex flex-col gap-3 items-center justify-center ">
									<span className="text-[14px] text-center text-[#507C7C]">
										Let’s work together
									</span>
									<div className="w-full flex items-center justify-center gap-3">
										<span className="text-[#CCFFFA] text-center text-[15px] 2xl:text-[18px]">
											Have an idea?
										</span>
										<button>
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
													d="M13.75 26.25L26.25 13.75M26.25 13.75L16.875 13.75M26.25 13.75V23.125"
													stroke="#1AFFE9"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div className="w-1/3 h-full p-2 flex flex-col gap-3 items-center justify-center border-x border-[#00393D]">
									<span className="text-[14px] text-center text-[#507C7C]">
										Creative tools
									</span>
									<div className="w-full flex items-center justify-center gap-3">
										<span className="text-[#CCFFFA] text-[15px] 2xl:text-[18px] text-center">
											Courses & Tools
										</span>
										<button>
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
													d="M13.75 26.25L26.25 13.75M26.25 13.75L16.875 13.75M26.25 13.75V23.125"
													stroke="#1AFFE9"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div className="w-1/3 h-full p-5 flex flex-col gap-3 items-center justify-center ">
									<span className="text-[14px] text-[#507C7C]">
										Follow Our Socials
									</span>
									<div className="w-[150px] h-[50px] rounded-full border border-[#00393D] flex justify-center items-center gap-3">
										<Link href={"#"}>
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
							</div>
						</div>
					</div>
					<div className="w-[97%] h-[70px] border-t px-2  border-[#00393D] flex sm:flex-row flex-col justify-center sm:justify-between items-center">
						<div className="flex  justify-center items-center gap-2">
							<Link
								href={"/terms-and-conditions"}
								className="md:text-[14px] text-[10px] text-[#507C7C]"
							>
								Terms & Conditions
							</Link>
							<span className="text-[#507C7C] ">|</span>
							<Link
								href={"/privacy-policy"}
								className="md:text-[14px] text-[10px] text-[#507C7C] "
							>
								Privacy Policy
							</Link>
						</div>
						<div className="text-[#507C7C] md:text-[14px] text-[10px]">
							© 2024 DevXplore. -- All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
