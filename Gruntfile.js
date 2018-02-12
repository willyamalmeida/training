module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      index: {
        files: [{ src: "index.html", dest: "dist/", filter: "isFile" }]
      },
      main: {
        files: [
            { expand: true, cwd: "node_modules/reveal.js/css/", src: "**", dest: "dist/css/" },
            { expand: true, cwd: "node_modules/reveal.js/js/", src: "**", dest: "dist/js/" },
            { expand: true, cwd: "node_modules/reveal.js/plugin/", src: "**", dest: "dist/plugin/" },
            { expand: true, cwd: "node_modules/reveal.js/lib/", src: "**", dest: "dist/lib/" }
        ]
      }
    },
    watch: {
      html: {
        files: ["index.html"],
        tasks: ['copy:index']
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["copy"]);
  grunt.registerTask("watch--",["watch"]);
};
