document.addEventListener('DOMContentLoaded', function() {
   function logFormContents() {
       const form = document.getElementById('subscription-form');
       if (form) {
           const formData = new FormData(form);
           const email = formData.get('email');
           console.log('Form Contents:', { email });
       } else {
           console.error('Form not found');
       }
   }

   // Attach the function to the global scope if needed
   window.logFormContents = logFormContents;
});