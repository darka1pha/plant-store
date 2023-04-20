'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { CarouselData } from './images-data'
import { ArrowLeft3, ArrowRight3 } from 'iconsax-react'

function ItemsCarousel(): JSX.Element {
	const [FlowDirection, setFlowDirection] = useState(true)
	const [CenterId, setCenterId] = useState(0)
	const [LeftId, setLeftId] = useState(CarouselData.length - 1)
	const [RightId, setRightId] = useState(1)
	const [dragValue, setDragValue] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const nextBtn = () => {
		if (LeftId === CarouselData.length - 1) {
			setLeftId(0)
		} else {
			setLeftId(LeftId + 1)
		}
		if (CenterId === CarouselData.length - 1) {
			setCenterId(0)
		} else {
			setCenterId(CenterId + 1)
		}

		if (RightId === CarouselData.length - 1) {
			setRightId(0)
		} else {
			setRightId(RightId + 1)
		}
		setFlowDirection(true)
	}

	const prevBtn = () => {
		setFlowDirection(false)
		if (LeftId === 0) {
			setLeftId(CarouselData.length - 1)
		} else {
			setLeftId(LeftId - 1)
		}
		if (CenterId === 0) {
			setCenterId(CarouselData.length - 1)
		} else {
			setCenterId(CenterId - 1)
		}
		if (RightId === 0) {
			setRightId(CarouselData.length - 1)
		} else {
			setRightId(RightId - 1)
		}
	}

	// Animation Variants
	const variants = {
		center: {
			x: '0rem',
			opacity: 1,
			scale: 1.1,
			rotate: 0,
			zIndex: '5',
			filter: 'brightness(100%)',
			backgroundImage: 'url(' + CarouselData[CenterId] + ')',
			boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
		left: {
			x: '-6rem',
			opacity: 1,
			filter: 'brightness(40%)',
			scale: 0.9,
			rotate: -10,
			backgroundImage: 'url(' + CarouselData[LeftId] + ')',
			zIndex: '4',
			boxShadow: 'unset',
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
		right: {
			backgroundImage: 'url(' + CarouselData[RightId] + ')',
			x: '6rem',
			opacity: 1,
			filter: 'brightness(40%)',
			scale: 0.9,
			rotate: 10,
			boxShadow: 'unset',
			zIndex: '3',
			transition: {
				type: 'spring',
				duration: 1,
			},
		},
		rightHidden: {
			x: '8rem',
			scale: 0,
			opacity: 0,
		},
		leftHidden: {
			x: '-8rem',
			scale: 0,
			opacity: 0,
		},
	}

	return (
		<motion.div className='flex items-center justify-center w-full relative'>
			<motion.div
				onTouchStart={(e) => {
					setDragValue(e.touches[0].clientX)
				}}
				onMouseDown={(e) => {
					setDragValue(e.clientX)
				}}
				onTouchMove={(e) => {
					setTouchEnd(e.targetTouches[0].clientX)
				}}
				onTouchEnd={() => {
					if (touchEnd - dragValue < 0) {
						nextBtn()
					} else if (touchEnd - dragValue > 0) {
						prevBtn()
					}
				}}
				onMouseUp={(e) => {
					if (e.clientX - dragValue < 0) {
						nextBtn()
					} else if (e.clientX - dragValue > 0) {
						prevBtn()
					}
				}}
				className='relative w-full h-48 flex items-center justify-center overflow-hidden cursor-grab'>
				<AnimatePresence initial={false}>
					<motion.div
						key={LeftId}
						variants={variants}
						initial={FlowDirection ? 'center' : 'leftHidden'}
						animate='left'
						exit={'leftHidden'}
						className='absolute w-24 h-36 rounded-lg bg-center bg-cover'
					/>
					<motion.div
						variants={variants}
						key={CenterId}
						initial={FlowDirection ? 'right' : 'left'}
						animate='center'
						className='absolute w-24 h-36 rounded-lg bg-center bg-cover'
					/>
					<motion.div
						key={RightId}
						variants={variants}
						initial={FlowDirection ? 'rightHidden' : 'center'}
						animate='right'
						exit={'rightHidden'}
						className='absolute w-24 h-36 rounded-lg bg-center bg-cover'
					/>
				</AnimatePresence>
			</motion.div>
			<motion.button
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					type: 'spring',
					duration: 0.5,
				}}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				className='absolute my-auto right-3 h-10 w-10 rounded-full drop-shadow-md bg-white flex items-center justify-center z-10'
				onClick={prevBtn}>
				<ArrowRight3 className='text-plantation font-bold' size={28} />
			</motion.button>
			<motion.button
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					type: 'spring',
					duration: 0.5,
				}}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				className='absolute my-auto left-3 h-10 w-10 rounded-full drop-shadow-md bg-white flex items-center justify-center z-10'
				onClick={nextBtn}>
				<ArrowLeft3 className='text-plantation font-bold' size={28} />
			</motion.button>
		</motion.div>
	)
}

export default ItemsCarousel
