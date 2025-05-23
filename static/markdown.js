function copyCode(button) {
    const code = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
    button.innerText = 'Copied!';
    setTimeout(() => {
        button.innerText = 'Copy';
    }, 1500);
    });
}