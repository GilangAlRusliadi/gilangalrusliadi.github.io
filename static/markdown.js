window.addEventListener("DOMContentLoaded", async () => {
    const markdownOutput = document.getElementById('markdownOutput');
    const url = markdownOutput.dataset.url;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(markdownText => {
            let htmlContent = marked.parse(markdownText);

            // Format bash code blocks
            htmlContent = htmlContent.replace(/<pre><code class="language-bash">([\s\S]*?)<\/code><\/pre>/g, function(match, code) {
                const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return `
                    <div class="bash-code">
                        <pre>${escaped}</pre>
                        <button class="copy-btn" onclick="copyToClipboard(this)">Copy</button>
                        <div class="copy-message">Copied!</div>
                    </div>
                `;
            });

            markdownOutput.innerHTML = htmlContent;
        })
        .catch(error => {
            markdownOutput.innerHTML = '<p style="color: red;">Error loading README: ' + error.message + '</p>';
        });

    // Copy function
    window.copyToClipboard = function(button) {
        const code = button.previousElementSibling.textContent;
        navigator.clipboard.writeText(code).then(() => {
            const message = button.nextElementSibling;
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
            }, 1000);
        });
    };
});
