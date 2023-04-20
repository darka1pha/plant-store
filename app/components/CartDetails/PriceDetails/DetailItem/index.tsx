const DetailItem = ({ title, value }: { title: string; value: number }) => {
	return (
		<div className='flex justify-between items-center w-full my-2'>
			<p className='text-white text-md'>{title}</p>
			<p
				style={{
					color: value === 0 ? '#B4E0A0' : 'white',
				}}
				className='text-lg'>
				{value === 0 ? 'Free' : `$${value.toFixed(2).toLocaleString()}`}
			</p>
		</div>
	)
}

export default DetailItem
