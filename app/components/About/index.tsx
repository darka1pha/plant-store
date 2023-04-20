import Image from 'next/image'
import AboutItem from './AboutItem'
import { Box, CallCalling } from 'iconsax-react'

const About = () => {
	return (
		<div className='flex flex-wrap justify-between w-full my-20 flex-col'>
			<div className='flex flex-col items-center justify-center text-center'>
				<p className='font-bold text-4xl text-[#1e1e1e] my-3'>About us</p>
				<p className='font-bold text-lg text-[#1e1e1e80]'>
					Life is short, buy the plants.
				</p>
			</div>
			<div className='flex flex-wrap items-center justify-between mt-16'>
				<AboutItem
					title='Fern-tastic Selection'
					subtitle='Many different species and variations in each category.'>
					<Image
						src='./assets/svg/plant.svg'
						height={40}
						width={40}
						alt='flower'
					/>
				</AboutItem>
				<AboutItem
					title='Fast Shipping'
					subtitle='4-day delivery time and an expedited delivery option.'>
					<Box size={40} color='black' />
				</AboutItem>
				<AboutItem
					title='24/5 Support'
					subtitle='We can answer your plant related questions, kinda.'>
					<CallCalling size={40} color='black' />
				</AboutItem>
			</div>
		</div>
	)
}

export default About
