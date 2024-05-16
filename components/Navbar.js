import Link from "next/link"
import ResumeDownload from "./ResumeDownload"

const RESUME_URL = "http://locahost:3000/public/carl_damey_resume.pdf"

export default function Navbar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">ABOUT</Link>
			<Link href="/contact">CONTACT ME!</Link>
			<ResumeDownload />
			<h1>test</h1>
			{/* <a href={Resume} download="Carl Damey Resume">DOWNLOAD MY RESUME */}
			{/* <button className={classes.navLink}>DOWNLOAD MY RESUME</button> */}
			{/* </a> */}
		</nav>
	)
}
