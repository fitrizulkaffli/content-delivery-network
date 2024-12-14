async function Lokasi() {
	const peta = Kesan_Peranti() ? "https://maps.apple.com/place?auid=4664738821478130747&lsp=9902" : "https://maps.app.goo.gl/a3RfsvUu5zifVAAw5";
	await Swal.fire({
		title: 'Lokasi',
		position: 'bottom',
		showClass: {
			popup: 'animate__animated animate__slideInUp animate__faster'
		},
		hideClass: {
			popup: 'animate__animated animate__zoomOut animate__faster'
		},
		grow: 'row',
		html: `<div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.6351415413196!2d101.0689821!3d4.4786998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cae9a09a2fcda5%3A0x942f4ba5b567fe9!2sCinta%20Alam%20Seri%20Jaya!5e0!3m2!1sms!2smy!4v1734193166753!5m2!1sms!2smy"
             width="100%" height="150"></iframe>
           </div>`,
		confirmButtonText: 'Buka Aplikasi Peta',
		showCloseButton: true,
		preConfirm: () => {
			window.open(peta, '_blank');
		}
	});
}
