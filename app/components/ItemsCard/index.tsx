import Image from 'next/image'
import CardFooter from './CardFooter'

const ItemsCard = () => {
	return (
		<div className='border-[#00000003] hover:-rotate-1 transition-all duration-500 cursor-pointer border-[1px] bg-white rounded-xl w-72 h-80 drop-shadow-md mx-auto my-4 hover:scale-[1.02] overflow-hidden'>
			<div className='w-full h-64'>
				<Image
					src='/assets/images/cactus.png'
					height={256}
					width={256}
					sizes='100vw'
					className='w-full h-full object-cover'
					alt='cactus'
				/>
			</div>
			<CardFooter />
		</div>
	)
}

export default ItemsCard
