window.onload = () => {
    // Functions: Arrow functions

    let message = document.getElementById(`message`);

    // Function “a” accepts “value” as an argument and simply returns the same
    // “value”. Since this function accepts only one argument, parens are not needed.
    let a = value => value;

    // We can also be redundant and use parens:
    // let a = (value) => value;

    // Same as…
    // let a = function(value) {
    //     return value;
    // };

    message.innerHTML = `<p>The function <code>${a.name}</code> returns
        <code>${a(3)}</code>.</p>`;

    // The smallest arrow function you can write
    let b = () => {};

    // Same as…
    // let b = function () {
    // };

    message.innerHTML += `<p>The function <code>${b.name}</code> returns
        <code>${b()}</code>.</p>`;

    // If you have a function that requires more than one parameter, parens are
    // required.
    let c = (firstParameter, secondParameter) => firstParameter + secondParameter;

    // Same as…
    // let c = function (firstParameter, secondParameter) {
    //     return firstParameter + secondParameter;
    // };

    message.innerHTML += `<p>The function <code>${c.name}</code> returns
        <code>${c(3, 4)}</code>.</p>`;

    // Neither of the following accepts any parameters, but does return a string.
    let getPet = () => `dog`;
    let getPetName = () => `Aria`;

    // Same as…
    // let getPet = function () {
    //     return `dog`;
    // };
    //
    // let getPetName = function () {
    //     return `Aria`;
    // };

    message.innerHTML += `<p>My <code>${getPet()}</code>’s name is
        <code>${getPetName()}</code>.</p>`;

    let getFullName = (firstName, lastName) => {return `${firstName} ${lastName}`;};

    // Same as…
    // let getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
    // But not the same as…
    // let getFullName = (firstName, lastName) => {`${firstName} ${lastName}`};

    message.innerHTML += `<p><code>${getFullName(`Ingrid`, `Newkirk`)}</code> is a
        founder of <abbr title="People for the Ethical Treatment of
        Animals"><span class="small-caps">peta</span></abbr>.</p>`;

    message.innerHTML += `<pre>-------\n
Click the body to see the following example.\n
-------</pre>`;

    // function createTeacher () {
    //     this.firstName = `Walter`;
    //     this.lastName = `White`;
    //
    //     // Dovetail, or hook into, the outer “this” context.
    //     let _this = this;
    //
    //     document.addEventListener(`click`, function () {
    //         message.innerHTML +=
    //             `<p>My name is <code>${_this.firstName}</code>
    //                 <code>${_this.lastName}</code>.</p>`;
    //     }, false);
    // }

    function createTeacher () {
        this.firstName = `Gabe`;
        this.lastName = `Kotter`;

        document.addEventListener(`click`, (function () {
            message.innerHTML += `<p>Welcome back, Mr
                <code>${this.firstName}</code> <code>${this.lastName}</code>!</p>`;
        }).bind(this), false); // Bind “this” to the anonymous function
    }

    // function createTeacher () {
    //     this.firstName = "Edna";
    //     this.lastName = "Krabappel";
    //
    //     document.addEventListener("click", () => {
    //         console.log(`My name is ${this.firstName} ${this.lastName}.`);
    //     }, false);
    // }

    createTeacher();
};
