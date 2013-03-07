({
    appDir: './app',
    baseUrl: './scripts',
    dir: './release',
    mainConfigFile : 'app/scripts/config.js',
    optimize: 'uglify',
    modules: [
        {
            name: 'main',
            exclude: [
                // If you prefer not to include certain libs exclude them here
            ]
        }
    ]
})