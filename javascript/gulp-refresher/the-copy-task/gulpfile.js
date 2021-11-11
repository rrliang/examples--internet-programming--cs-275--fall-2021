const { src, dest } = require(`gulp`);

let paths = {
    dev: `dev`,
    html: `dev/html`,
    styles: `dev/styles`,
    js: `dev/scripts`,
    images: `dev/img`
};

let copyUnprocessedAssets = () => {
    return src([
        `${paths.dev}/*.*`,     // Source all files,
        `${paths.dev}/**`,      // and all folders,
        `!${paths.html}/`,      // but don’t copy the HTML folder,
        `!${paths.html}/*.*`,   // and any files in it,
        `!${paths.html}/**`,    // and any of its sub folders;
        `!${paths.images}/`,    // same for the images folder,
        `!${paths.images}/*.*`, // its files,
        `!${paths.images}/**`,  // and its sub folders;
        `!${paths.js}/`,        // and again for the JavaScript folder,
        `!${paths.js}/*.*`,     // its files,
        `!${paths.js}/**`,      // and its sub folders;
        `!${paths.styles}/**`   // and, finally, ignore the Sass/CSS sub folders.
    ], {dot: true})
        .pipe(dest(`prod`));
};

exports.copyUnprocessedAssets = copyUnprocessedAssets;
