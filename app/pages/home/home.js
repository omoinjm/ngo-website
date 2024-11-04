function showTrailer() {
   Swal.fire({
     title: 'Watch the Trailer',
     html: `
       <iframe width=450" height="215" 
         src="https://www.youtube.com/embed/OquPtNpOAhM"  
         title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen
       ></iframe>
     `,
     showCloseButton: true
   });
 }