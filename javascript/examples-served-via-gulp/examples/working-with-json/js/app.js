window.onload = () => {
    let message = document.getElementById(`message`);
    let emojis = {
        dog: `🐶`,
        "🕷👨🏽": `A Spider and a Man`,
        faces: [`😭`, `😤`, `😡`, `😳`]
    };

    let fall2021 = {
        "attendance": [
            {
                "august": [{
                    "24": "P",
                    "26": "L",
                    "31": "A"
                }]
            },
            {
                "september": [{
                    "2": "P",
                    "7": "P",
                    "9": "P",
                    "14": "P",
                    "16": "A",
                    "21": "L",
                    "23": "P",
                    "28": "P",
                    "30": "A"
                }]
            },
            {
                "october": [{
                    "5": "P",
                    "7": "P",
                    "12": "P",
                    "14": "L",
                    "19": "P",
                    "21": "A",
                    "26": "L",
                    "28": "A"
                }]
            }
        ]
    };

    try {
        message.innerHTML = `<p>The dog emoji: ${emojis.dog}</p>`;
        message.innerHTML += `<p>I can also use emojis to index a location in an object. <code>emojis[\`🕷👨🏽\`]</code> rightfully returns ${emojis[`🕷👨🏽`]}</p>`;
        message.innerHTML += `<p>${emojis.faces[0]}</p>`;
        message.innerHTML += `<p>${emojis.faces[1]}</p>`;
        message.innerHTML += `<p>Sometimes I just want to ${emojis.faces[0]}`;
        for ( let i = 0; i < emojis.faces.length; i++ ) {
            message.innerHTML += `<p>${emojis.faces[i]}</p>`;
        }
        message.innerHTML += `<p>There are ${fall2021.attendance.length} objects in <code>fall2021</code></p>`;
        message.innerHTML += `<p>${fall2021.attendance[0][`august`][0][`24`]}</p>`;
        message.innerHTML += `<p>${fall2021.attendance[1][`september`][0]}</p>`;


    } catch(error) {
        message.textContent = `Error: ${error}`;
    }
};
