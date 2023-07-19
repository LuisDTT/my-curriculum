import messages from '../../lang/en-US.json'

declare global {
	namespace FormatjsIntl {
		interface Message {
			ids: keyof typeof messages
		}
	}
}
