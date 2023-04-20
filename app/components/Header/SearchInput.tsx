import { SearchNormal } from 'iconsax-react'
const SearchInput = () => {
	return (
		<div className='h-14 max-w-3xl w-full rounded-2xl border-plantation border-[2px] px-7 flex items-center'>
			<SearchNormal color='#181B1A' size={24} />
			<input
				className='h-full w-full px-5 placeholder:text-[#B3B6B6] focus:outline-none caret-plantation'
				placeholder='Search...'
			/>
		</div>
	)
}

export default SearchInput
