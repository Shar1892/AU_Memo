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

export const transferToRoman = (i) => {
	if (i === 0) {
		return 'N';
	} else if (i === 1) {
		return 'I';
	} else if (i === 2) {
		return 'II';
	} else if (i === 3) {
		return 'III';
	} else if (i === 4) {
		return 'IV';
	} else if (i === 5) {
		return 'V';
	}
};

export const transferToString = (i) => {
	if (i === 0) {
		return 'Нулевая';
	} else if (i === 1) {
		return 'Первая';
	} else if (i === 2) {
		return 'Вторая';
	} else if (i === 3) {
		return 'Третья';
	} else if (i === 4) {
		return 'Четвертая';
	} else if (i === 5) {
		return 'Пятая';
	} else {
		return 'Следующая';
	}
};
