window.onload = () => {
    // Strings: repeat method

    let message = document.getElementById(`message`);
    let animalSound = `oink `; /* ⟵ Note the empty space at the end of the string.
                                     This is for outputting purposes. */

    message.innerHTML += `<p>Pigs go
        <code>${animalSound.repeat(2).trim()}</code></p>`;
    message.innerHTML += `<p>And some go
        <code>${animalSound.repeat(3).trim()}</code></p>`;
};
