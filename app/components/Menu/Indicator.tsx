const Indicator = ({ top, height }: { top: any; height: any }) => {
	return (
		<div
			style={{
				top,
				height,
			}}
			className={`absolute bg-white w-full rounded-3xl transition-all duration-300 z-0`}>
			<div className='absolute top-[-40px] bg-white right-[20px] h-10 w-10 z-10' />
			<div className='absolute top-[-40px] bg-plantation right-[20px] h-10 w-10 rounded-br-2xl z-[11]' />
			<div className='absolute bottom-[-40px] bg-white right-[20px] h-10 w-10 z-10' />
			<div className='absolute bottom-[-40px] bg-plantation right-[20px] h-10 w-10 rounded-tr-2xl z-[11]' />
		</div>
	)
}

export default Indicator
