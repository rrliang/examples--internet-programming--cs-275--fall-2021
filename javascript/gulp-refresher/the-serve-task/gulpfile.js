const { watch } = require(`gulp`),
    browserSync = require(`browser-sync`);

let serve = () => {
    browserSync({
        notify: true,
        server: {
            baseDir: [
                `dev`,     /* Will reveal scripts/app.js, styles/main.css, and the
                              contents of the img folder */
                `dev/html` /* Won’t reveal the aforementioned folders or their
                              contents */
            ]
        }
    });

    watch(`dev/**`).on(`change`, browserSync.reload);
};

exports.serve = serve;
