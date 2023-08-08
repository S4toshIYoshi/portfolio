export type TElement = {
	tag: string;
	atribute: string;
	text: string;
};

const serch = (array: [], str: string) => {
	let counter: number = 0;
	for (let i = 0; i < array.length; i++) {}
};

export const textAnalyzier = (text: string) => {
	const stack: string[] = [];
	const element: TElement = {
		tag: '',
		atribute: '',
		text: ''
	};
	let isRunWrite: boolean = false;
	let isTag: boolean = false;
	let isText: boolean = false;
	let isAtribute: boolean = false;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === '<') {
			isTag = true;
			stack.push(text[i]);
		}

		if (text[i] === '>') {
			isRunWrite = false;
			stack.push(text[i]);
		}

		if (isTag) {
			if (stack.indexOf('>') || text[i] != ' ') {
				isTag = false;
			}
			element.tag += text[i];
		}

		if (isText) {
			if (stack.indexOf('<') === -1) {
				isText = false;
			}
			element.tag += text[i];
		}

		if (isAtribute) {
			element.atribute += text[i];
		}
	}

	return;
};
