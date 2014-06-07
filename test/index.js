var test = require('tape').test;
var glslify = require('glslify');
var compile = require('webgl-compile-shader');

var shader = glslify({
    sourceOnly: true,
    vertex: './vert.glsl',
    fragment: './frag.glsl',
});

test('compiles correctly', function(t) {
    t.doesNotThrow( compile.bind(this, shader), 'compiles successfully' );
    t.end();
});