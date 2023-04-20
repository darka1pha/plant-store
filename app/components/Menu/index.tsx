'use client'
import { Home, Truck, Gift, Shop, ShoppingCart } from 'iconsax-react'
import MenuButton from './MenuButton'
import React, { useEffect, useRef, useState } from 'react'
import Indicator from './indicator'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const buttons = [
	{
		name: 'Home',
		icon: <Home size='24' className='mr-5' color='#B4E0A0' />,
		url: '/',
	},
	// {
	// 	name: 'Delivery',
	// 	icon: <Truck size='24' className='mr-5' color='#B4E0A0' />,
	// 	url: '/delivery',
	// },
	// {
	// 	name: 'Pickup',
	// 	icon: <Gift size='24' className='mr-5' color='#B4E0A0' />,
	// 	url: '/pickup',
	// },
	{
		name: 'Shop',
		icon: <Shop size='24' className='mr-5' color='#B4E0A0' />,
		url: '/shop',
	},
	{
		name: 'Cart',
		icon: <ShoppingCart size='24' className='mr-5' color='#B4E0A0' />,
		url: '/cart',
	},
]

const Menu = () => {
	const tabsRef = useRef<any>([])
	const router = useRouter()
	const [activeTabIndex, setActiveTabIndex] = useState(0)
	const [tabIndicatorWidth, setTabIndicatorHeight] = useState(0)
	const [tabIndicatorLeft, setTabIndicatorTop] = useState(0)

	useEffect(() => {
		function setTabPosition() {
			const currentTab = tabsRef.current[activeTabIndex]
			setTabIndicatorTop(currentTab?.offsetTop ?? 0)
			setTabIndicatorHeight(currentTab?.clientHeight ?? 0)
		}

		setTabPosition()
		window.addEventListener('resize', setTabPosition)

		return () => window.removeEventListener('resize', setTabPosition)
	}, [activeTabIndex])
	return (
		<div className='h-full w-80 pt-6 flex flex-col items-center relative'>
			<p className='text-white text-4xl'>EUFLORIA</p>
			<div className='mt-6 flex flex-col w-full pl-5 relative'>
				<Indicator top={tabIndicatorLeft} height={tabIndicatorWidth} />
				{buttons.map(({ icon, name, url }, key) => (
					<MenuButton
						onClick={() => {
							setActiveTabIndex(key)
							router.push(url)
						}}
						ref={(el) => (tabsRef.current[key] = el)}
						key={key}
						icon={icon}
						name={name}
						url={url}
					/>
				))}
			</div>
			<div className='w-full absolute bottom-0'>
				<Image
					src='./assets/svg/leaves.svg'
					height={320}
					width={320}
					alt='leaves'
				/>
			</div>
		</div>
	)
}

export default Menu
