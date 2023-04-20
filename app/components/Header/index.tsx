import SearchInput from './SearchInput'
import { Profile, ShoppingCart } from 'iconsax-react'
const Header = () => {
	return (
		<div className='flex justify-between items-center'>
			<SearchInput />
			<div>
				<button className='p-3 rounded-xl hover:bg-gray-100 duration-500  transition-all ease-in-out'>
					<Profile size={24} color='#181B1A' />
				</button>
				<button className='bg-plantation p-3 rounded-xl mx-5 hover:opacity-95 duration-500 transition-all ease-in-out'>
					<ShoppingCart size={24} color='white' />
				</button>
			</div>
		</div>
	)
}

export default Header
