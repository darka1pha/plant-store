import { ItemsCard } from '@components'
import { ArrowRight2 } from 'iconsax-react'

const Shop = () => {
	return (
		<div>
			<div className='flex items-center mt-10'>
				<p className='text-4xl font-extrabold text-plantation mr-5'>
					Plants to buy
				</p>

				<button className='bg-white flex items-center justify-center transition-all duration-500 rounded border-plantation border-[1px] h-10 w-28'>
					<p className='text-xs font-semibold text-plantation'>See More</p>
					<ArrowRight2 className='text-plantation ml-2' size={15} />
				</button>
			</div>
			<div className='flex flex-wrap items-center mt-12'>
				<ItemsCard />
				<ItemsCard />
				<ItemsCard />
				<ItemsCard />
				<ItemsCard />
			</div>
		</div>
	)
}

export default Shop
