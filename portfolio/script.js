document.addEventListener('DOMContentLoaded', () => {
    // 1. Read More Button Logic for the About section
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreBio = document.getElementById('more-bio');

    if (readMoreBtn && moreBio) {
        readMoreBtn.addEventListener('click', () => {
            if (moreBio.style.display === 'none' || moreBio.style.display === '') {
                moreBio.style.display = 'inline';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreBio.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    // 2. Download Resume Button Logic
    const resumeBtn = document.getElementById('resume-btn');

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            // *ACTION NEEDED:*
            // Ensure you save your resume PDF file as 'SreeLekha_Resume.pdf' 
            // in the same folder as this code.
            const resumePath = 'SreeLekha_Resume.pdf'; 
            
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'SreeLekha_Ummidi_Resume.pdf'; // Suggested download name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log('Attempting to download resume from: ' + resumePath);
        });
    }
});