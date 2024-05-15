import Link from "next/link"
// import Resume from "../public/carl_damey_resume"

const RESUME_URL = "http://locahost:3000/public/carl_damey_resume.pdf"


export default function Navbar() {
  function downloadFile(url) {
    const aTag = document.createElement("a")
    aTag.href=url
    aTag.setAttribute("download", "carl_damey_resume.pdf")
    document.body.appendChild("aTag")
    aTag.click()
    aTag.remove()
  }

	return (
		<nav>
			<Link href="/">Home</Link>
      <Link href="/about">ABOUT</Link>
			<Link href="/contact">CONTACT ME!</Link>
      <button onClick={downloadFile(RESUME_URL)}>DOWNLOAD MY RESUME</button>
      <h1>test</h1>
			{/* <a href={Resume} download="Carl Damey Resume">DOWNLOAD MY RESUME */}
        {/* <button className={classes.navLink}>DOWNLOAD MY RESUME</button> */}
      {/* </a> */}
		</nav>
	)
}
