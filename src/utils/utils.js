export const getArrayText = (str, phraseArr) => {
	let resArr = [];

	if (phraseArr) {
		let currentText = str;

		phraseArr.forEach((phrase) => {
			const indexFinish = currentText.indexOf(phrase);
			resArr.push(currentText.slice(0, indexFinish), phrase);
			currentText = currentText.slice(indexFinish + phrase.length);
		});

		resArr.push(currentText);
	} else {
		resArr.push(str);
	}

	return resArr;
};

export const chechPhrase = (text, phraseArr) => {
	if (phraseArr) {
		return phraseArr.find((phrase) => {
			return phrase === text;
		});
	} else {
		return false;
	}
};

export const checkLast = (i, arr) => {
	return i === arr.length - 1 ? true : false;
};
