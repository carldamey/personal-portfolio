import Link from "next/link"

export default function Navbar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">DOWNLOAD MY RESUME</Link>
			<Link href="/contact">CONTACT ME!</Link>
		</nav>
	)
}
