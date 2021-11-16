window.onload = () => {
    let allElements = document.querySelectorAll(`*`),
        message = document.getElementById(`message`);

    message.innerHTML = `<ul>`;

    for (let i = 0; i < allElements.length; i++) {
        message.innerHTML += `<li><code>${allElements[i].nodeName}</code></li>`;
    }

    message.innerHTML += `</ul>`;
};
