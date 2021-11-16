window.onload = () => {
    let allElements = document.querySelectorAll(`*`),
        message = document.getElementById(`message`),
        allNodes = allElements.length;

    message.innerHTML = `<ul>`;

    for (let i = 0; i < allNodes; i++) {
        message.innerHTML += `<li><code>${allElements[i].nodeName}</code></li>`;
    }

    message.innerHTML += `</ul>`;
};
