import {Html} from "@react-email/html"
import {Head} from "@react-email/head"
import {Preview} from "@react-email/preview"
import {Container} from "@react-email/container"
import {Body} from "@react-email/body"
import {Link} from "@react-email/link"
import {Img} from "@react-email/img"
import * as React from "react"
import {createTheme} from "@mui/material"
import logo from "../base64-images/logo"

export default function Wrapper({children}): React.ReactElement {
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
						padding: "68px 0 80px",
					}}
				>
					<Img
						src={logo}
						style={{
							margin: "0 auto",
							width: "200px",
						}}
					/>
					{children}
				</Container>
				<Container
					style={{
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					<Link
						href="{{ server_url }}"
						style={{
							color: theme.palette.text.secondary,
							fontSize: "14px",
						}}
					>
						{"{{ server_url }}"}
					</Link>
				</Container>
			</Body>
		</Html>
	)
}

export const theme = createTheme({
	palette: {
		background: {
			default: "#eee",
		},
	},
})
