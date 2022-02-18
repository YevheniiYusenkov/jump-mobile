type FontSize = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

export interface Theme {
	dark: boolean,
	colors: {
		Logo: string,
		Primary: string,
		Background: string,
		Secondary: string,
		Text: string,
		TextSecondary: string,
		Error: string,
		Success: string,
		Transparent: string,

		primary: string,
		background: string,
		card: string,
		text: string,
		border: string,
		notification: string,
	},
	font: {
		weight: {
			ExtraLight: FontSize,
			Light: FontSize,
			Regular: FontSize,
			Bold: FontSize,
		},
		size: {
			ExtraSmall: number,
			Small: number,
			Normal: number,
			Medium: number,
			Large: number,
			ExtraLarge: number,
		},
	},
}
