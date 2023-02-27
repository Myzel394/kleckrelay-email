const web =
	"data:image/png;base64,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"

export default web