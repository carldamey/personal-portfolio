import Image from "next/image"
import styles from "@/styles/About.module.css"
import { useState } from "react"

export default function About() {
  const [fontSize, setFontSize] = useState(2)
  const [bugWidth, setBugWidth] = useState(200)
	return (
		<>
			<h1>about me</h1>
			<p className={styles.redText}>carl is</p>
			{/* <img src="/bug_sniff.jpg" alt="bug"/> */}
			<Image
				src="/bug_sniff.jpg"
				alt="bug after field trip to the hydraulic press"
				width={bugWidth}
				height={200}
			/>
      <br />
      <button onClick={() => setBugWidth(bugWidth + 200)} >Pookify</button>
			<style jsx>
				{`
					.fontSize {
						font-size: ${fontSize}rem;
					}
				`}
			</style>
			<p className="fontSize">asdasdasdasdasdasdasdasdasdasdasdasd</p>
      <button onClick={() => setFontSize(fontSize + 1)}>click me</button>
		</>
	)
}
