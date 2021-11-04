window.onload = () => {
    // Strings: startsWith method

    let message = document.getElementById(`message`);
    let animal = `sheep`;

    // Does the string “sheep” start with the letter “s”?

    // ES5
    message.innerHTML = `<p><code>(\`s\` === animal[0])</code> yields
        <code>${(`s` === animal[0])}</code></p>`;
    // or
    message.innerHTML += `<p><code>(animal.indexOf(\`s\`) === 0)</code> yields
        <code>${(animal.indexOf(`s`) === 0)}</code></p>`;

    // ES6
    message.innerHTML += `<p><code>(animal.startsWith(\`s\`))</code> yields
        <code>${(animal.startsWith(`s`))}</code></p>`;
    // or
    message.innerHTML += `<p><code>(animal.startsWith(\`s\`, 0))</code> yields
        <code>${(animal.startsWith(`s`, 0))}</code></p>`;
};
