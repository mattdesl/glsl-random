# glsl-random 

The classic 'one-liner' for 2D pseudo-random values in GLSL. This uses a highp version for improved randomness and better stability across GPUs, see here:  
http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/

However, the 'classic' lowp version (with no precision specified) is also included here. Some may find it useful for targeted mobile GPUs. 

![Noise](http://i.imgur.com/CSC7rWV.png)

## usage

```glsl
#pragma glslify: random = require(glsl-random)

//or you can use the lowp / default precision version:
//#pragma glslify: random = require(glsl-random/lowp)

...
	vec2 rnd = random(myVec.xy);
```

Typically you might use it like so:

```glsl
gl_FragColor = random( gl_FragCoord.xy / resolution.xy );
```