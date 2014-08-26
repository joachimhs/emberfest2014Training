module.exports = {
    options: {
        separator: '\n'
    },
    dist: {
        src: ['js/app/app.js','js/app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
    }
};
