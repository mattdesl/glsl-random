var test = require('tape').test;
var glslify = require('glslify');
var compile = require('webgl-compile-shader');

var shader = glslify({
    sourceOnly: true,
    vertex: './vert.glsl',
    fragment: './frag.glsl',
});

function doCompile() {
    compile(shader);
}

test('compiles correctly', function(t) {
    t.doesNotThrow( doCompile, 'compiles successfully' );
    t.end();
});