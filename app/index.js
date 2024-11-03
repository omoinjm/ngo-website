function loadComponent(url, placeholderId) {
   fetch(url)
      .then(response => response.text())
      .then(data => {
         document.getElementById(placeholderId).innerHTML = data;
         showButton(); // Ensure the button visibility is set correctly
      })
      .catch(error => console.error(`Error loading ${placeholderId}:`, error));
}

// Function to load page content from file
function loadPageContent(page) {
   fetch(`./pages/${page}/${page}.html`)
      .then(response => {
         if (!response.ok) throw new Error('Page not found');
         return response.text();
      })
      .then(content => {
         document.getElementById('page-content').innerHTML = content;
         document.title = page.charAt(0).toUpperCase() + page.slice(1);
         window.location.hash = page;
      })
      .catch(() => {
         document.getElementById('page-content').innerHTML = '<h1>404 - Page Not Found</h1>';
         document.title = '404 - Page Not Found';
      });
}

loadComponent('./pages/common/navbar/navbar.html', 'navbar-placeholder');
loadComponent('./pages/common/footer/footer.html', 'footer-placeholder');

// Determine which page to load based on URL path
const path = window.location.pathname;
const page = path.split('/').pop().split('.').shift(); // Get the page name from the URL

if (page === '') {
   loadPageContent('home')
} else {
   loadPageContent(page)
}