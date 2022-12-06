let isResizable = false;

export const resize = () => {
    const leftSide = document.getElementById('editable-area');
    const rightSide = document.getElementById('preview-area');
    isResizable = true;
    if (isResizable) {
        document.onmousemove = (e) => {
            const x = e.pageX;
            if (x > 0-10 && x < window.innerWidth+10) {
                const percentage = (x / window.innerWidth) * 100;
                leftSide!.style.width = percentage + '%';
                rightSide!.style.width = (100 - percentage) + '%';
            }
        }
    }else{
        document.onmousemove = null;
    }
}

export const stopResize = () => {
    isResizable = false;
    document.onmousemove = null;
}
