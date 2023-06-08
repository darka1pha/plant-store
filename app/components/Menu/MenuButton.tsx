'use client'

import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'

interface MenuButtonProps {
	name: string
	icon: React.ReactNode
	url: string
	onClick: () => void
}

const MenuButton = forwardRef<HTMLButtonElement | null, MenuButtonProps>(
	({ name, icon, url, onClick }, ref) => {
		const pathname = usePathname()
		return (
			<button
				ref={ref}
				onClick={onClick}
				className='my-2 flex items-center px-10 py-5 w-full rounded-tl-2xl rounded-bl-2xl transition-all ease-in-out z-10'>
				{icon}
				<p
					className={
						pathname === url ? 'text-l text-plantation' : 'text-white text-l'
					}>
					{name}
				</p>
			</button>
		)
	}
)

MenuButton.displayName = 'MenuButton'

export default MenuButton
