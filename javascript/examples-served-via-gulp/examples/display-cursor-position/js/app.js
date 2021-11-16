window.onload = () => {
    document.onmousemove = (event) => {
        document.getElementById(`message`).innerHTML =
            `<p>X is at <code>${event.pageX}</code></p>
             <p>Y is at <code>${event.pageY}</code></p>`;
    };
};
