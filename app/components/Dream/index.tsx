import Image from 'next/image'
import RoundEdges from './RoundEdges'

const Dream = () => {
	return (
		<div className='h-96 relative w-full'>
			<div className='h-full bg-deram dream-w absolute right-[-65px] rounded-tl-3xl rounded-bl-3xl flex justify-between items-center'>
				<RoundEdges />
				<div className='px-10'>
					<div>
						<p className='text-[#121212] font-extrabold text-6xl'>Buy your</p>
						<p className='text-[#121212] font-extrabold text-6xl'>
							Dream plants.
						</p>
					</div>
					<div className='flex mt-5'>
						<div className='border-r-[1px] border-r-[#1E1E1E] pr-10'>
							<p className='text-[#121212] text-3xl'>50+</p>
							<p className='text-[#121212] text-lg'>Plant Species</p>
						</div>
						<div className='pl-10'>
							<p className='text-[#121212] text-3xl'>1M+</p>
							<p className='text-[#121212] text-lg'>Customers</p>
						</div>
					</div>
				</div>
				<div className='mt-3'>
					<Image
						alt='dream'
						src='./assets/svg/dream.svg'
						height={400}
						width={400}
					/>
				</div>
			</div>
		</div>
	)
}

export default Dream
