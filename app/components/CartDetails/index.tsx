import RoundEdges from '@components/Dream/RoundEdges'
import ItemsCarousel from './ItemsCarousel'
import ItemsCount from './ItemsCount'
import PriceDetails from './PriceDetails'

const CartDetails = () => {
	return (
		<div className='h-[500px] relative w-full'>
			<div className='h-full bg-plantation w-full max-w-md absolute right-[-65px] rounded-tl-3xl rounded-bl-3xl flex items-center flex-col p-5'>
				<RoundEdges />
				<ItemsCarousel />
				<ItemsCount />
				<PriceDetails />
			</div>
		</div>
	)
}

export default CartDetails
