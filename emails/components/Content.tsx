import {Section} from "@react-email/section"
import * as React from "react"

export default function Content({children}): React.ReactElement {
	return <Section style={containerPadding}>{children}</Section>
}

const containerPadding = {
	padding: "0 30px",
	margin: "0 auto",
}
