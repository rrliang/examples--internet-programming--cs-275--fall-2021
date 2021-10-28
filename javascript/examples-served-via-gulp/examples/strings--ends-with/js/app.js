window.onload = () => {
    // Strings: endsWith method

    let message = document.getElementById(`message`);
    let animal = `sheep`;

    // Does the string “sheep” end in the letter “p”?

    // ES5
    message.innerHTML = `<p><code>(\`p\` === animal[animal.length - 1])</code> yields <code>${(`p` === animal[animal.length - 1])}</code></p>`;
    // or
    message.innerHTML += `<p><code>(animal.indexOf(\`p\`) === animal.length - 1)</code> yields <code>${(animal.indexOf(`p`) === animal.length - 1)}</code></p>`;

    // ES6
    message.innerHTML += `<p><code>(animal.endsWith(\`p\`, animal.length))</code> yields <code>${(animal.endsWith(`p`, animal.length))}</code></p>`;
    // or
    message.innerHTML += `<p><code>(animal.endsWith(\`p\`))</code> yields <code>${(animal.endsWith(`p`))}</code></p>`;
};
