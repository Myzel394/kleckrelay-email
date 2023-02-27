import {Heading} from "@react-email/heading"
import {Section} from "@react-email/section"
import {Text} from "@react-email/text"
import {Button} from "@react-email/button"
import * as React from "react"
import Wrapper, {theme} from "./components/Wrapper"
import Content from "./components/Content"

export default function Email() {
	return (
		<Wrapper>
			<Content>
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
			</Content>
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
			<Content>
				<Text style={textBody}>{"{{ body_not_requested }}"}</Text>
			</Content>
		</Wrapper>
	)
}

const textBody = {
	color: theme.palette.text.secondary,
	fontSize: "16px",
}
