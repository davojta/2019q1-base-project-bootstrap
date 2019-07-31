export const addInteractivity = () => {
    document.querySelectorAll('.el1').forEach(el => {
        el.addEventListener('click', () => {
            el.style.backgroundColor = "#ff8000"
        })
    });
}

