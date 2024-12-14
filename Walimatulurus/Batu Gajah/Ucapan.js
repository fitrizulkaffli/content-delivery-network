async function Ucapan() {
	await Swal.fire({
		title: 'Your Comment',
		input: 'textarea',
		inputPlaceholder: 'Write your comment here...',
		inputAttributes: {
			'aria-label': 'Write your comment here'
		},
		confirmButtonText: 'Submit',
		position: 'bottom',
		showCloseButton: true,
		showClass: {
			popup: 'animate__animated animate__slideInUp animate__faster'
		},
		hideClass: {
			popup: 'animate__animated animate__zoomOut animate__faster'
		},
		grow: 'row',
		preConfirm: (comment) => {
			if(!comment) {
				Swal.showValidationMessage('Please enter a comment');
			} else {
				Swal.fire('Thank you for your comment!', comment, 'success');
			}
		}
	});
}
