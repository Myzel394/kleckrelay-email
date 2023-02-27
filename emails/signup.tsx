import {Html} from "@react-email/html"
import {Head} from "@react-email/head"
import {Preview} from "@react-email/preview"
import {Body} from "@react-email/body"
import {createTheme} from "@mui/material"
import {Container} from "@react-email/container"
import * as React from "react"
import {Img} from "@react-email/img"
import {Heading} from "@react-email/heading"
import {Section} from "@react-email/section"
import {Text} from "@react-email/text"
import {Button} from "@react-email/button"
import {Link} from "@react-email/link"
import Wrapper from "./components/Wraper"

const theme = createTheme({
	palette: {
		background: {
			default: "#eee",
		},
	},
})

export default function Email() {
	return (
		<Wrapper>
			<Section style={containerPadding}>
				<Heading
					mt="25"
					style={{
						textAlign: "center",
						fontSize: "30px",
						color: theme.palette.text.primary,
					}}
					as="h1"
				>
					{"{{ title }}"}
				</Heading>
				<Text style={textBody}>{"{{ body }}"}</Text>
			</Section>
			<Section
				style={{
					backgroundColor: theme.palette.background.default,
					verticalAlign: "middle",
					textAlign: "center",
					padding: "20px 0",
				}}
			>
				<Button
					href="{{ verify_url }}"
					pX={20}
					pY={10}
					style={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "10px",
						margin: "0 auto",
						textAlign: "center",
						textDecoration: "none",
					}}
				>
					{"{{ verify_text }}"}
				</Button>
			</Section>
			<Section style={containerPadding}>
				<Text style={textBody}>{"{{ body_not_requested }}"}</Text>
			</Section>
		</Wrapper>
	)
}

const containerPadding = {
	padding: "0 30px",
	margin: "0 auto",
}

const textBody = {
	color: theme.palette.text.secondary,
	fontSize: "16px",
}
