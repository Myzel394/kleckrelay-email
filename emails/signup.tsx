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

const theme = createTheme({
	palette: {
		background: {
			default: "#eee",
		},
	},
})

export default function Email() {
	return (
		<Html>
			<Head />
			<Preview>{"{{ preview_text }}"}</Preview>
			<Body
				style={{
					backgroundColor: theme.palette.background.default,
					fontFamily: "HelveticaNeue,Helvetica,Roboto,Arial,sans-serif",
				}}
			>
				<Container
					style={{
						boxShadow: "0 5px 10px rgba(20,50,70,.2)",
						backgroundColor: theme.palette.background.paper,
						width: "360px",
						margin: "20px auto 20px auto",
						padding: "68px 0 50px",
					}}
				>
					<Section style={containerPadding}>
						<Img
							src="/static/logo.png"
							style={{
								margin: "0 auto",
								width: "200px",
							}}
						/>
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
						<Text
							style={{
								color: theme.palette.text.secondary,
								fontSize: "14px",
							}}
						>
							{"{{ body }}"}
						</Text>
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
						<Text
							style={{
								color: theme.palette.text.secondary,
								fontSize: "14px",
							}}
						>
							{"{{ body_not_requested }}"}
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	)
}

const containerPadding = {
	padding: "0 30px",
	margin: "0 auto",
}
