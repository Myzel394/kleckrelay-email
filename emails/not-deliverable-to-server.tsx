import {Heading} from "@react-email/heading"
import {Section} from "@react-email/section"
import {Text} from "@react-email/text"
import {Column} from "@react-email/column"
import {Img} from "@react-email/img"
import * as React from "react"
import Wrapper, {theme} from "./components/Wrapper"
import Content from "./components/Content"
import emailIcon from "./base64-images/email"
import serverNotIcon from "./base64-images/server-not"
import webNotIcon from "./base64-images/web-not"
import arrowRightIcon from "./base64-images/arrow-right"

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
				<Section
					style={{
						backgroundColor: theme.palette.warning.light,
						padding: "0 20px",
						marginBottom: "20px",
						borderRadius: "10px",
					}}
				>
					<Text
						style={{
							color: theme.palette.warning.contrastText,
							fontSize: "16px",
						}}
					>
						{"{{ body }}"}
					</Text>
				</Section>
				<Section>
					<Column>
						<Img src={emailIcon} alt="Email" width="64" />
					</Column>
					<Column>
						<Img src={arrowRightIcon} alt="right arrow" width="32" />
					</Column>
					<Column>
						<Img src={serverNotIcon} alt="Server" width="64" />
					</Column>
					<Column>
						<Img src={arrowRightIcon} alt="right arrow" width="32" />
					</Column>
					<Column>
						<Img src={webNotIcon} alt="Web" width="64" />
					</Column>
				</Section>
				<Section
					style={{
						marginTop: "20px",
					}}
				>
					<Text
						style={{
							color: theme.palette.text.secondary,
							fontSize: "16px",
						}}
					>
						{"{{ explanation }}"}
					</Text>
				</Section>
			</Content>
		</Wrapper>
	)
}
