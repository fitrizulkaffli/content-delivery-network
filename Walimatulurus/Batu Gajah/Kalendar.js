async function Kalendar() {
	const eventDate = new Date("2024-12-31T23:59:59");
	const calendarLink = Kesan_Peranti() ? "https://www.icloud.com/calendar" : "https://calendar.google.com";
	await Swal.fire({
		title: 'Event Countdown',
		position: 'bottom',
		showClass: {
			popup: 'animate__animated animate__slideInUp animate__faster'
		},
		hideClass: {
			popup: 'animate__animated animate__zoomOut animate__faster'
		},
		grow: 'row',
		html: `
                    <div>
                        <div id="countdown" class="mb-3 text-center"></div>
                    </div>
                `,
		confirmButtonText: 'Add to Calendar',
		showCloseButton: true,
		didOpen: () => {
			const countdownEl = document.getElementById("countdown");
			const updateCountdown = () => {
				const now = new Date().getTime();
				const distance = eventDate.getTime() - now;
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);
				countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
				if(distance < 0) {
					clearInterval(timerInterval);
					countdownEl.textContent = "Event has started!";
				}
			};
			const timerInterval = setInterval(updateCountdown, 1000);
			updateCountdown();
		},
		preConfirm: () => {
			window.open(calendarLink, '_blank');
		}
	});
}
