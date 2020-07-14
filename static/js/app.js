function toggleTextVisibility() {
    const hiddenText = document.getElementById("hiddenText");
    const toggleBtn =  document.getElementById("toggleText");
    hiddenText.removeAttribute('hidden');
    toggleBtn.setAttribute('hidden', '')
}