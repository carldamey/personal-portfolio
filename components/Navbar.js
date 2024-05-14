import Link from "next/link"
// import Resume from "../public/carl_damey_resume"

export default function Navbar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/contact">CONTACT ME!</Link>
			{/* <a href={Resume} download="Carl Damey Resume">DOWNLOAD MY RESUME */}
        {/* <button className={classes.navLink}>DOWNLOAD MY RESUME</button> */}
      {/* </a> */}
		</nav>
	)
}
