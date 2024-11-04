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
        <div class="footer-popup-list">
            <ol>
                <li><strong>Information We Collect</strong><br>
                    <p>We may collect personal information from you, such as your name, email address, and other information you voluntarily provide. We may also collect non-personal information, such as your IP address and browser type.</p>
                </li>
                <br>
                <li><strong>How We Use Your Information</strong><br>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Provide you with information and services</li>
                        <li>Improve our website</li>
                        <li>Communicate with you</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </li>
                <br>
                <li><strong>Sharing Your Information</strong><br>
                    <p>We may share your information with third-party service providers who assist us in operating our website. We will not sell or rent your personal information to third parties.</p>
                </li>
                <br>
                <li><strong>Data Security</strong><br>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
                </li>
                <br>
                <li><strong>Changes to Privacy Policy</strong><br>
                    <p>TRVL reserves the right to modify this Privacy Policy at any time without prior notice.</p>
                </li>
            </ol>
        </div>
    `
    : `
        <div class="footer-popup-list">
            <ol>
                <li><strong>Acceptance of Terms</strong><br>
                    <p>By accessing or using this website, you agree to be bound by these Terms of Service.</p>
                </li>
                <br>
                <li><strong>Use of the Website</strong><br>
                    <p>You agree to use this website for lawful purposes only. You may not use this website in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use of the website.</p>
                </li>
                <br>
                <li><strong>Intellectual Property</strong><br>
                    <p>All content on this website, including text, graphics, logos, images, and software, is the property of [Your NGO's Name] or its licensors and is protected by copyright and other intellectual property laws.</p>
                </li>
                <br>
                <li><strong>Disclaimer of Warranties</strong><br>
                    <p>This website is provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                </li>
                <br>
                <li><strong>Limitation of Liability</strong><br>
                    <p>In no event shall TRVL be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.</p>
                </li>
                <br>
                <li><strong>Changes to Terms of Service</strong><br>
                    <p>TRVL reserves the right to modify these Terms of Service at any time without prior notice.</p>
                </li>
            </ol>
        </div>
     `

Swal.fire({
    title: title,
    html: `<div style="text-align: left;">${html}</div>`,
    showCloseButton: true
});
}