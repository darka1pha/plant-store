import Image from 'next/image'

const AboutItem = ({
	children,
	subtitle,
	title,
}: {
	children: React.ReactNode
	title: string
	subtitle: string
}) => {
	return (
		<div className='max-w-[285px] mt-4 w-full flex flex-col items-center'>
			<div className='w-24 h-24 p-7 rounded-full bg-celadon mb-6'>
				{children}
			</div>
			<div className='flex flex-col items-center justify-center text-center'>
				<p className='font-bold text-lg text-[#1e1e1e] my-3'>{title}</p>
				<p className='font-bold text-lg text-[#1e1e1e80]'>{subtitle}</p>
			</div>
		</div>
	)
}

export default AboutItem
