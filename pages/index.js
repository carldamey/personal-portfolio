import Head from "next/head"
import Image from "next/image"
import {Inter} from "next/font/google"
import styles from "@/styles/Home.module.css"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({subsets: ["latin"]})

export default function Home() {
	return (
		<>
			<Head>
				<title>Carl Damey</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<h1>carl mode</h1>
			<Button>aldkjads</Button>
			<p>
				I am a full-stack software engineer, with five years in the tech
				industry, including networking, cybersecurity, IT, tech repair, and
				software development. My background in both logistics and tech has
				granted me great analytical skills as well as those in optimization in
				systems of all kinds. I employ these skills daily to implement
				out-of-the-box , clean, and efficient solutions to all aspects of
				software development.
			</p>
		</>
	)
}
