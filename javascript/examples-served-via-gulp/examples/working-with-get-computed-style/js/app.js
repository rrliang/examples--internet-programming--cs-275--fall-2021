window.onload = () => {
    let button = document.querySelector(`button`);
    let paragraphs = document.getElementsByTagName(`p`);

    button.addEventListener(`click`, () => {
        if (`block` === getComputedStyle(paragraphs[0]).getPropertyValue(`display`)) {
            paragraphs[0].style.display = `none`;
            paragraphs[1].style.display = `block`;
        } else {
            paragraphs[0].style.display = `block`;
            paragraphs[1].style.display = `none`;
        }
    }, false);
};
