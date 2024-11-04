function showPopup(title) {
   Swal.fire({
      title: title,
      text: 'Book your session now!',
      icon: 'info',
      confirmButtonText: 'OK'
   });
}