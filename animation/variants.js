// animations/variants.js
export const variants = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const scaleUpVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// animations/variants.js

export const fadeInUp = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const scaleUp = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const rotateIn = {
	hidden: { opacity: 0, rotate: -90 },
	visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
};

export const slideInLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const slideInRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
