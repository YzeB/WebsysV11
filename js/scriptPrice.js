let previewContainer = document.querySelector('.productPreview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.itemBoxGroup .itemBox').forEach(itemBox => {
    itemBox.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = itemBox.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.closeButton').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});