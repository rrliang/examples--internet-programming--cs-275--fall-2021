window.onload = () => {
    let img,
        message = document.querySelector(`footer div`);

    document.onmousemove = function(event) {
        img = document.getElementById(`image--image-follows-mouse-example`);
        img.style.left = `${event.pageX}px`;
        img.style.top = `${event.pageY}px`;
        message.innerHTML = `<p>X: <code>${event.pageX}</code></p>`;
        message.innerHTML += `<p>Y: <code>${event.pageY}</code></p>`;
    };
};
