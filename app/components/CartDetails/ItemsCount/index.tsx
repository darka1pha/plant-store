'use client'

import { Add, Minus } from 'iconsax-react'
import { motion } from 'framer-motion'
const ItemsCount = () => {
	return (
		<div className='flex justify-between items-center w-full mt-4'>
			<p className='text-celadon text-xl'>Cactus</p>
			<p className='text-white font-semibold text-xl'>$12.00</p>
			<div className='flex justify-between items-center'>
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						duration: 0.5,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					className='w-10 h-10 rounded-xl bg-white flex justify-center items-center'>
					<Minus size='24' className='text-plantation' />
				</motion.button>
				<p className='text-white text-xl mx-4'>1</p>
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						duration: 0.5,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					className='w-10 h-10 rounded-xl bg-white flex justify-center items-center'>
					<Add size='24' className='text-plantation' />
				</motion.button>
			</div>
		</div>
	)
}

export default ItemsCount
