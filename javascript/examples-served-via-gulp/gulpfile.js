const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    del = require(`del`),
    babel = require(`gulp-babel`),
    htmlValidator = require(`gulp-html`),
    jsLinter = require(`gulp-eslint`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let validateHTML = () => {
    return src([`examples/*.html`, `examples/**/*.html`])
        .pipe(htmlValidator(undefined));
};

let lintCSS = () => {
    return src(`examples/**/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`examples/**/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJS = () => {
    return src(`examples/**/*.js`)
        .pipe(babel())
        .pipe(dest(`.tmp/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: `default`, // `brave browser`, `google chrome`, `microsoft edge` (In Windows, this might need to be microsoft-edge), `firefox`, `opera`, `safari`, `vivaldi`
        server: {
            baseDir: [
                `.tmp`,
                `examples`
            ]
        }
    });

    watch(`examples/**/*.html`, validateHTML).on(`change`, reload);
    watch(`examples/**/*.css`, lintCSS).on(`change`, reload);
    watch(`examples/**/*.js`, lintJS).on(`change`, reload);
};

async function clean() {
    let fs = require(`fs`),
        i,
        foldersToDelete = [`.tmp`, `prod`];

    for (i = 0; i < foldersToDelete.length; i++) {
        try {
            fs.accessSync(foldersToDelete[i], fs.F_OK);
            process.stdout.write(`\n\tThe ` + foldersToDelete[i] +
                ` directory was found and will be deleted.\n`);
            del(foldersToDelete[i]);
        } catch (e) {
            process.stdout.write(`\n\tThe ` + foldersToDelete[i] +
                ` directory does NOT exist or is NOT accessible.\n`);
        }
    }

    process.stdout.write(`\n`);
}

async function listTasks () {
    let exec = require(`child_process`).exec;

    exec(`gulp --tasks`, function (error, stdout, stderr) {
        if (null !== error) {
            process.stdout.write(`An error was likely generated when invoking ` +
                `the “exec” program in the default task.`);
        }

        if (`` !== stderr) {
            process.stdout.write(`Content has been written to the stderr stream ` +
                `when invoking the “exec” program in the default task.`);
        }

        process.stdout.write(`\n\tThis default task does ` +
            `nothing but generate this message. The ` +
            `available tasks are:\n\n${stdout}`);
    });
}

exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJS = transpileJS;
exports.clean = clean;
exports.default = listTasks;
exports.serve = series(
    validateHTML,
    lintCSS,
    lintJS,
    transpileJS,
    serve
);
