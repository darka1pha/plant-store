import DetailItem from './DetailItem'

const PriceDetails = () => {
	return (
		<div className='flex w-full flex-col p-3 mt-2'>
			<DetailItem title='Sub total' value={1800} />
			<DetailItem title='Tax' value={1} />
			<DetailItem title='Shipping' value={0} />
			<DetailItem title='Total' value={19} />
		</div>
	)
}

export default PriceDetails
