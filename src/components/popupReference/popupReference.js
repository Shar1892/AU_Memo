import './popupReference.css';

function PopupReference({data, isOpen, popupClose}) {
	const handleClose = (evt) => {
		if (evt.target === evt.currentTarget) {
			popupClose();
		}
	};

	return (
		<div
			className={`popupReference__overlay ${
				isOpen ? 'popupReference__overlay_visible' : ''
			}`}
			onClick={handleClose}
		>
			<div className='popupReference'>
				<p className='popupReferenc__title'>справка</p>
				<p className='popupReferenc__name'>{data.name}</p>
				<p className='popupReferenc__discription'>{data.discription}</p>
			</div>
		</div>
	);
}

export default PopupReference;

/*

<p className='popupReferenc__name'>{data.name}</p>
				<p className='popupReferenc__discription'>{data.discription}</p>

*/
