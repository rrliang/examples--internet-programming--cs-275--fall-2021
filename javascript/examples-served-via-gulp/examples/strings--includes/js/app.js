window.onload = () => {
    // Strings: includes method

    let message = document.getElementById(`message`);
    let animal = `sheep`;

    // ES5
    message.innerHTML = `<p><code>(animal.indexOf(\`he\`))</code> yields
      <code>${(animal.indexOf(`he`))}</code></p>`;
    message.innerHTML += `<p><code>(animal.indexOf(\`ee\`)</code> yields
      <code>${(animal.indexOf(`ee`))}</code></p>`;
    message.innerHTML += `<p><code>(animal.indexOf(\`they\`))</code> yields
      <code>${(animal.indexOf(`they`))}</code></p>`;

    // ES6
    message.innerHTML += `<p><code>(animal.includes(\`he\`))</code> yields
      <code>${(animal.includes(`he`))}</code></p>`;

    message.innerHTML += `<p><code>(animal.includes(\`ee\`, 2))</code> yields
      <code>${(animal.includes(`ee`, 2))}</code></p>`;

    message.innerHTML += `<p><code>(animal.includes(\`they\`))</code> yields
      <code>${(animal.includes(`they`))}</code></p>`;
};
