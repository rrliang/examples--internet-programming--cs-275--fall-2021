window.onload = () => {
    let message = document.getElementById(`message`);
    let myJavaScriptClass = {
        name: `Intro to Internet Programming`,
        course_number: `CS 275`
    };

    const UNIVERSITY = `The University of Hartford`;

    try {
        // Uncomment the following to see that a const’s value cannot
        // change, unless it’s an object.
        // UNIVERSITY = `NYU`;

        message.innerHTML = `<p>The name of my JavaScript course is
            <code>${myJavaScriptClass.name}</code>, and it’s taught at
            ${UNIVERSITY}.</p>`;
        myJavaScriptClass.name = `Introduction to Internet Programming`;
        message.innerHTML += `<p>My class has been renamed to
            <code>${myJavaScriptClass.name}</code>, meaning that the object
            to which <code>myJavaScriptClass</code> points has been
            modified.</p>`;
    } catch(error) {
        message.innerHTML += `<p>It appears as though an attempt has been
        made to re-assign a value to the <code>MAX</code> const. The
        error thrown is <code>${error}</code>.</p>`;
    }
};
