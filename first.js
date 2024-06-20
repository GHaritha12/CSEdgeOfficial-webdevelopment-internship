document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const preview = document.getElementById('resume-preview');
    const templateSelect = document.getElementById('template-select');

    // Function to update the preview
    function updatePreview() {
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const summary = document.getElementById('summary').innerText;
        const skills = document.getElementById('skills').innerText;
        const education = document.getElementById('education').innerText;
        const experience = document.getElementById('experience').innerText;
        const projects = document.getElementById('projects').innerText;
        const certifications = document.getElementById('certifications').innerText;
        const languages = document.getElementById('languages').innerText;
        const references = document.getElementById('references').innerText;

        let template = `
            <div class="preview-header">
                <h1>${name}</h1>
                <p>${contact}</p>
            </div>
            <div class="preview-section">
                <h2>Summary</h2>
                <p>${summary}</p>
                <h2>Skills</h2>
                <p>${skills}</p>
                <h2>Education</h2>
                <p>${education}</p>
                <h2>Experience</h2>
                <p>${experience}</p>
                <h2>Projects</h2>
                <p>${projects}</p>
                <h2>Certifications</h2>
                <p>${certifications}</p>
                <h2>Languages</h2>
                <p>${languages}</p>
                <h2>References</h2>
                <p>${references}</p>
            </div>
        `;

        preview.innerHTML = template;
    }

    // Event listeners to update preview on input changes
    form.addEventListener('input', updatePreview);
    templateSelect.addEventListener('change', updatePreview);

    // Placeholder function to handle download actions
    document.getElementById('download-pdf').addEventListener('click', () => {
        alert('PDF download is not implemented yet.');
    });

    document.getElementById('download-docx').addEventListener('click', () => {
        alert('Docx download is not implemented yet.');
    });

    document.getElementById('download-txt').addEventListener('click', () => {
        alert('Txt download is not implemented yet.');
    });

    // Initial preview update
    updatePreview();
});
