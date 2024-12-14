async function Hubungi() {
    await Swal.fire({
        title: 'Hubungi',
        position: 'bottom',
        showClass: {
            popup: 'animate__animated animate__slideInUp animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut animate__faster'
        },
        grow: 'row',
        html: `<ul class="list-group">
             <li class="list-group-item d-flex justify-content-between align-items-center">
               John Doe
               <a href="https://wa.me/1234567890" class="btn btn-success btn-sm" target="_blank">WhatsApp</a>
             </li>
             <li class="list-group-item d-flex justify-content-between align-items-center">
               Jane Smith
               <a href="tel:+1234567890" class="btn btn-primary btn-sm">Call</a>
             </li>
           </ul>`,
        confirmButtonText: 'Close',
        showCloseButton: true
    });
}
