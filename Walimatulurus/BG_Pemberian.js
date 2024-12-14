async function Pemberian() {
    await Swal.fire({
        title: 'Special Gift',
        position: 'bottom',
        showClass: {
            popup: 'animate__animated animate__slideInUp animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut animate__faster'
        },
        grow: 'row',
        html: `<div>Gift content goes here.</div>`,
        confirmButtonText: 'Close',
        showCloseButton: true
    });
}
