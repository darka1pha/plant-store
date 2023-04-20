import { About, Dream } from '@components'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-12 relative'>
			<Dream />
			<About />
		</main>
	)
}
