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

 function showHeroPopup() {
  Swal.fire({
    title: 'Learn More',
    html: `
      <section class="learn-list">
        <p>Discover how our comprehensive health and wellness programs can transform your life.</p>
        <ul>
          <li><strong>Personalized Health Plans</strong>: Tailored to your unique needs and goals.</li>
          <li><strong>Expert Guidance</strong>: Access to experienced health professionals.</li>
          <li><strong>Community Support</strong>: Connect with like-minded individuals.</li>
          <li><strong>Holistic Wellness</strong>: Addressing physical, mental, and emotional health.</li>
        </ul>
      </section>
      <a href="javascript:void(0);" onclick="loadPageContent('services') class="btn btn-primary">Contact Us</a>
    `,
    showCloseButton: true
  });
}