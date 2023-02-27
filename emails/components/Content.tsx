import {ReactElement} from "react"
import {Section} from "@react-email/section"

export default function Content({children}): ReactElement {
	return <Section style={containerPadding}>{children}</Section>
}

const containerPadding = {
	padding: "0 30px",
	margin: "0 auto",
}
