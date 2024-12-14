// Utility function to detect iOS devices
function detectiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Reusable function to show a popup with custom content and preConfirm action
async function showPopup({ title, htmlContent, confirmText, preConfirmAction, confirmBtnText = 'Close' }) {
    return Swal.fire({
        title,
        position: 'bottom',
        showClass: {
            popup: 'animate__animated animate__slideInUp animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut animate__faster'
        },
        grow: 'row',
        html: htmlContent,
        confirmButtonText: confirmBtnText,
        showCloseButton: true,
        preConfirm: preConfirmAction,
    });
}

// Show Location Popup
async function showLocationPopup() {
    const mapLink = detectiOS() 
        ? "https://maps.apple.com/?q=Location+Name" 
        : "https://maps.google.com/?q=Location+Name";

    await showPopup({
        title: 'Location',
        htmlContent: `<div><iframe src="https://maps.google.com/maps?q=Location+Name&output=embed" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>`,
        confirmBtnText: 'Open Map',
        preConfirmAction: () => {
            window.open(mapLink, '_blank');
        }
    });
}

// Show Contact Popup
async function showContactPopup() {
    const htmlContent = `
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                John Doe
                <a href="https://wa.me/1234567890" class="btn btn-success btn-sm" target="_blank">WhatsApp</a>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Jane Smith
                <a href="tel:+1234567890" class="btn btn-primary btn-sm">Call</a>
            </li>
        </ul>
    `;
    await showPopup({
        title: 'Contact Information',
        htmlContent,
        confirmBtnText: 'Close'
    });
}

// Show Calendar Popup with Countdown
async function showCalendarPopup() {
    const eventDate = new Date("2024-12-31T23:59:59");
    const calendarLink = detectiOS() ? "https://www.icloud.com/calendar" : "https://calendar.google.com";

    const countdownHtml = `<div><div id="countdown" class="mb-3 text-center"></div></div>`;

    await showPopup({
        title: 'Event Countdown',
        htmlContent: countdownHtml,
        confirmBtnText: 'Add to Calendar',
        preConfirmAction: () => {
            window.open(calendarLink, '_blank');
        },
        didOpen: () => {
            const countdownEl = document.getElementById("countdown");
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = eventDate.getTime() - now;

                if (distance < 0) {
                    countdownEl.textContent = "Event has started!";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            };

            const timerInterval = setInterval(updateCountdown, 1000);
            updateCountdown();  // Call immediately to avoid delay
        }
    });
}

// Show Gift Popup
async function showGiftPopup() {
    const htmlContent = `<div>Gift content goes here.</div>`;
    await showPopup({
        title: 'Special Gift',
        htmlContent
    });
}

// Show Comment Popup with validation
async function showCommentPopup() {
    await Swal.fire({
        title: 'Your Comment',
        input: 'textarea',
        inputPlaceholder: 'Write your comment here...',
        inputAttributes: {
            'aria-label': 'Write your comment here'
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Close',
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
            if (!comment) {
                Swal.showValidationMessage('Please enter a comment');
            } else {
                Swal.fire('Thank you for your comment!', comment, 'success');
            }
        }
    });
}
