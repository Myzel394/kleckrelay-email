import {Heading} from "@react-email/heading"
import {Section} from "@react-email/section"
import {Text} from "@react-email/text"
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
				<code
					style={{
						fontSize: "20px",
					}}
				>
					{"{{ code }}"}
				</code>
			</Section>
		</Wrapper>
	)
}

const textBody = {
	color: theme.palette.text.secondary,
	fontSize: "16px",
}
