function subsribe() {
    const form = document.getElementById('subscription-form');
    if (form) {
        const formData = new FormData(form);
        const email = formData.get('email');
        console.log('Form Contents:', { email });
    } else {
        console.error('Form not found');
    }
}
 
function showFooterPopup(title) {

let html = title == 'Privacy Policy'
    ? `
        <p><strong>1. Information We Collect</strong></p>
        <p>We may collect personal information from you, such as your name, email address, and other information you voluntarily provide. We may also collect non-personal information, such as your IP address and browser type.</p>

        <p><strong>2. How We Use Your Information</strong></p>
        <p>We use your information to:</p>
        <ul>
            <li>Provide you with information and services</li>
            <li>Improve our website</li>
            <li>Communicate with you</li>
            <li>Comply with legal obligations</li>
        </ul>

        <p><strong>3. Sharing Your Information</strong></p>
        <p>We may share your information with third-party service providers who assist us in operating our website. We will not sell or rent your personal information to third parties.</p>

        <p><strong>4. Data Security</strong></p>
        <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>   

        <p><strong>5. Changes to Privacy Policy</strong></p>
        <p>TRVL reserves the right to modify this Privacy Policy at any time without prior notice.</p>
    `
    : `
        <p><strong>1. Acceptance of Terms</strong></p>
        <p>By accessing or using this website, you agree to be bound by these Terms of Service.</p>

        <p><strong>2. Use of the Website</strong></p>
        <p>You agree to use this website for lawful purposes only. You may not use this website in any way that could damage, disable, overburden, or impair
        the website or interfere with any other party's use of the website.</p>

        <p><strong>3. Intellectual Property</strong></p>
        <p>All content on this website, including text, graphics, logos, images, and software, is the property of [Your NGO's Name] or its licensors and is protected by copyright and other intellectual property laws.</p>

        <p><strong>4. Disclaimer of Warranties</strong></p>
        <p>This website is provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness
        for a particular purpose, or non-infringement.</p>

        <p><strong>5. Limitation of Liability</strong></p>
        <p>In no event shall TRVL be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.</p>

        <p><strong>6. Changes to Terms of Service</strong></p>
        <p>TRVL reserves the right to modify these Terms of Service at any time without prior notice.</p>    
    `

Swal.fire({
    title: title,
    html: `<div style="text-align: left;">${html}</div>`,
    showCloseButton: true
});
}