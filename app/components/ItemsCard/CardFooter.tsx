const CardFooter = () => {
	return (
		<div className='py-2 px-3 flex items-center justify-between'>
			<div>
				<p className='text-plantation font-bold'>Cactus</p>
				<p className='text-plantation text-xs font-bold'>$8</p>
			</div>
			<button className='bg-white  rounded border-plantation border-[1px] h-10 w-28'>
				<p className='text-xs font-semibold text-plantation'>Buy Now</p>
			</button>
		</div>
	)
}

export default CardFooter
