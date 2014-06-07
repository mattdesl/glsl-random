#ifdef GL_ES
precision mediump float;
#endif

#pragma glslify: random = require(../index.glsl)
#pragma glslify: random2 = require(../lowp.glsl)

void main() {
	gl_FragColor.r = random2(vec2(0.5, 0.5));
	gl_FragColor += vec4( vec3(random( vec2(0.0) )), 1.0);
}