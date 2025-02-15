<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #f5f5f6; -webkit-text-stroke: #f5f5f6; min-height: 15.0px}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'; -webkit-text-stroke: #ffffff; min-height: 17.0px}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'; color: #1a1a1a; -webkit-text-stroke: #1a1a1a; background-color: #383838; min-height: 17.0px}
    p.p7 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; font: 14.0px 'Helvetica Neue'; -webkit-text-stroke: #ffffff; min-height: 17.0px}
    p.p8 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'; color: #1a1a1a; -webkit-text-stroke: #1a1a1a; min-height: 17.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">/*</span></p>
<p class="p1"><span class="s1">MIT License</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Copyright (c) 2017 Pavel Dobryakov</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Permission is hereby granted, free of charge, to any person obtaining a copy</span></p>
<p class="p1"><span class="s1">of this software and associated documentation files (the "Software"), to deal</span></p>
<p class="p1"><span class="s1">in the Software without restriction, including without limitation the rights</span></p>
<p class="p1"><span class="s1">to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></p>
<p class="p1"><span class="s1">copies of the Software, and to permit persons to whom the Software is</span></p>
<p class="p1"><span class="s1">furnished to do so, subject to the following conditions:</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">The above copyright notice and this permission notice shall be included in all</span></p>
<p class="p1"><span class="s1">copies or substantial portions of the Software.</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></p>
<p class="p1"><span class="s1">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></p>
<p class="p1"><span class="s1">FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></p>
<p class="p1"><span class="s1">AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></p>
<p class="p1"><span class="s1">LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></p>
<p class="p1"><span class="s1">OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span></p>
<p class="p1"><span class="s1">SOFTWARE.</span></p>
<p class="p1"><span class="s1">*/</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">'use strict';</span></p>
<p class="p1"><span class="s1">// Simulation section</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const canvas = document.querySelector('.splash-canvas');</span></p>
<p class="p1"><span class="s1">const homePageBody = document.querySelector("body");</span></p>
<p class="p1"><span class="s1">const mainWrapper = document.querySelector("#main");</span></p>
<p class="p1"><span class="s1">const modeChangeButton = document.querySelector('.theme-button');</span></p>
<p class="p1"><span class="s1">resizeCanvas();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">let config = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SIM_RESOLUTION: 128,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>DYE_RESOLUTION: 1024,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>CAPTURE_RESOLUTION: 512,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>DENSITY_DISSIPATION: 4,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>VELOCITY_DISSIPATION: 2.87,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>PRESSURE: 0.43,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>PRESSURE_ITERATIONS: 20,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>CURL: 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SPLAT_RADIUS: 0.28,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SPLAT_FORCE: 5000,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SHADING: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>COLORFUL: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>COLOR_UPDATE_SPEED: 10,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>PAUSED: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BACK_COLOR: { r: 0, g: 0, b: 0 },</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>TRANSPARENT: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM_ITERATIONS: 8,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM_RESOLUTION: 256,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM_INTENSITY: 0.1,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM_THRESHOLD: 0.6,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>BLOOM_SOFT_KNEE: 0.7,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SUNRAYS: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SUNRAYS_RESOLUTION: 196,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>SUNRAYS_WEIGHT: 0.7,</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function pointerPrototype() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.id = -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.texcoordX = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.texcoordY = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.prevTexcoordX = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.prevTexcoordY = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.deltaX = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.deltaY = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.down = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.moved = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>this.color = [30, 0, 300];</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">let pointers = [];</span></p>
<p class="p1"><span class="s1">let splatStack = [];</span></p>
<p class="p1"><span class="s1">pointers.push(new pointerPrototype());</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const { gl, ext } = getWebGLContext(canvas);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if (isMobile()) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>config.DYE_RESOLUTION = 512;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">if (!ext.supportLinearFiltering) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>config.DYE_RESOLUTION = 512;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>config.SHADING = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>config.BLOOM = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>config.SUNRAYS = false;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// startGUI();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getWebGLContext(canvas) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let gl = canvas.getContext('webgl2', params);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const isWebGL2 = !!gl;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!isWebGL2)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let halfFloat;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let supportLinearFiltering;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (isWebGL2) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.getExtension('EXT_color_buffer_float');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>supportLinearFiltering = gl.getExtension('OES_texture_float_linear');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>halfFloat = gl.getExtension('OES_texture_half_float');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.clearColor(1.0, 1.0, 1.0, 1.0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let formatRGBA;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let formatRG;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let formatR;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (isWebGL2) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// ga('send', 'event', isWebGL2 ? 'webgl2' : 'webgl', formatRGBA == null ? 'not supported' : 'supported');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>ext: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>formatRGBA,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>formatRG,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>formatR,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>halfFloatTexType,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>supportLinearFiltering</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getSupportedFormat(gl, internalFormat, format, type) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>switch (internalFormat) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>case gl.R16F:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>return getSupportedFormat(gl, gl.RG16F, gl.RG, type);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>case gl.RG16F:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>default:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>internalFormat,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>format</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function supportRenderTextureFormat(gl, internalFormat, format, type) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texture = gl.createTexture();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let fbo = gl.createFramebuffer();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return status == gl.FRAMEBUFFER_COMPLETE;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// function startGUI () {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>var gui = new dat.GUI({ width: 300 });</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'DYE_RESOLUTION', { 'high': 1024, 'medium': 512, 'low': 256, 'very low': 128 }).name('quality').onFinishChange(initFramebuffers);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'SIM_RESOLUTION', { '32': 32, '64': 64, '128': 128, '256': 256 }).name('sim resolution').onFinishChange(initFramebuffers);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'DENSITY_DISSIPATION', 0, 4.0).name('density diffusion');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'VELOCITY_DISSIPATION', 0, 4.0).name('velocity diffusion');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'PRESSURE', 0.0, 1.0).name('pressure');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'CURL', 0, 50).name('vorticity').step(1);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'SPLAT_RADIUS', 0.01, 1.0).name('splat radius');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'SHADING').name('shading').onFinishChange(updateKeywords);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'COLORFUL').name('colorful');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add(config, 'PAUSED').name('paused').listen();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>gui.add({ fun: () =&gt; {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>splatStack.push(parseInt(Math.random() * 20) + 5);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>} }, 'fun').name('Random splats');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let bloomFolder = gui.addFolder('Bloom');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>bloomFolder.add(config, 'BLOOM').name('enabled').onFinishChange(updateKeywords);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>bloomFolder.add(config, 'BLOOM_INTENSITY', 0.1, 2.0).name('intensity');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>bloomFolder.add(config, 'BLOOM_THRESHOLD', 0.0, 1.0).name('threshold');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let sunraysFolder = gui.addFolder('Sunrays');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>sunraysFolder.add(config, 'SUNRAYS').name('enabled').onFinishChange(updateKeywords);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>sunraysFolder.add(config, 'SUNRAYS_WEIGHT', 0.3, 1.0).name('weight');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let captureFolder = gui.addFolder('Capture');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>captureFolder.addColor(config, 'BACK_COLOR').name('background color');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>captureFolder.add(config, 'TRANSPARENT').name('transparent');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>captureFolder.add({ fun: captureScreenshot }, 'fun').name('take screenshot');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let github = gui.add({ fun : () =&gt; {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>window.open('https://github.com/PavelDoGreat/WebGL-Fluid-Simulation');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>ga('send', 'event', 'link button', 'github');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>} }, 'fun').name('Github');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>github.__li.className = 'cr function bigFont';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>github.__li.style.borderLeft = '3px solid #8C8C8C';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let githubIcon = document.createElement('span');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>github.domElement.parentElement.appendChild(githubIcon);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>githubIcon.className = 'icon github';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let twitter = gui.add({ fun : () =&gt; {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>ga('send', 'event', 'link button', 'twitter');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>window.open('https://twitter.com/PavelDoGreat');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>} }, 'fun').name('Twitter');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>twitter.__li.className = 'cr function bigFont';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>twitter.__li.style.borderLeft = '3px solid #8C8C8C';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let twitterIcon = document.createElement('span');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>twitter.domElement.parentElement.appendChild(twitterIcon);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>twitterIcon.className = 'icon twitter';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let discord = gui.add({ fun : () =&gt; {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>ga('send', 'event', 'link button', 'discord');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>window.open('https://discordapp.com/invite/CeqZDDE');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>} }, 'fun').name('Discord');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>discord.__li.className = 'cr function bigFont';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>discord.__li.style.borderLeft = '3px solid #8C8C8C';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let discordIcon = document.createElement('span');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>discord.domElement.parentElement.appendChild(discordIcon);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>discordIcon.className = 'icon discord';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let app = gui.add({ fun : () =&gt; {</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>ga('send', 'event', 'link button', 'app');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">        </span>window.open('http://onelink.to/5b58bn');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>} }, 'fun').name('Check out mobile app');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>app.__li.className = 'cr function appBigFont';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>app.__li.style.borderLeft = '3px solid #00FF7F';</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>let appIcon = document.createElement('span');</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>app.domElement.parentElement.appendChild(appIcon);</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>appIcon.className = 'icon app';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>// if (isMobile())</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">    </span>// <span class="Apple-converted-space">    </span>gui.close();</span></p>
<p class="p1"><span class="s1">// }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function isMobile() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return /Mobi|Android/i.test(navigator.userAgent);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function captureScreenshot() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let res = getResolution(config.CAPTURE_RESOLUTION);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let target = createFBO(res.width, res.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, ext.halfFloatTexType, gl.NEAREST);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>render(target);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texture = framebufferToTexture(target);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>texture = normalizeTexture(texture, target.width, target.height);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let captureCanvas = textureToCanvas(texture, target.width, target.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let datauri = captureCanvas.toDataURL();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>downloadURI('fluid.png', datauri);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>URL.revokeObjectURL(datauri);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function framebufferToTexture(target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let length = target.width * target.height * 4;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texture = new Float32Array(length);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.readPixels(0, 0, target.width, target.height, gl.RGBA, gl.FLOAT, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return texture;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function normalizeTexture(texture, width, height) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let result = new Uint8Array(texture.length);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let id = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = height - 1; i &gt;= 0; i--) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (let j = 0; j &lt; width; j++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>let nid = i * width * 4 + j * 4;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>result[nid + 0] = clamp01(texture[id + 0]) * 255;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>result[nid + 1] = clamp01(texture[id + 1]) * 255;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>result[nid + 2] = clamp01(texture[id + 2]) * 255;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>result[nid + 3] = clamp01(texture[id + 3]) * 255;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>id += 4;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return result;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function clamp01(input) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return Math.min(Math.max(input, 0), 1);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function textureToCanvas(texture, width, height) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let captureCanvas = document.createElement('canvas');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let ctx = captureCanvas.getContext('2d');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>captureCanvas.width = width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>captureCanvas.height = height;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let imageData = ctx.createImageData(width, height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>imageData.data.set(texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>ctx.putImageData(imageData, 0, 0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return captureCanvas;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function downloadURI(filename, uri) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let link = document.createElement('a');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>link.download = filename;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>link.href = uri;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.body.appendChild(link);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>link.click();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.body.removeChild(link);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">class Material {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>constructor(vertexShader, fragmentShaderSource) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.vertexShader = vertexShader;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.fragmentShaderSource = fragmentShaderSource;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.programs = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.activeProgram = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.uniforms = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>setKeywords(keywords) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let hash = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (let i = 0; i &lt; keywords.length; i++)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>hash += hashCode(keywords[i]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let program = this.programs[hash];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (program == null) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>program = createProgram(this.vertexShader, fragmentShader);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>this.programs[hash] = program;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (program == this.activeProgram) return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.uniforms = getUniforms(program);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.activeProgram = program;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bind() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.useProgram(this.activeProgram);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">class Program {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>constructor(vertexShader, fragmentShader) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.uniforms = {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.program = createProgram(vertexShader, fragmentShader);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.uniforms = getUniforms(this.program);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bind() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.useProgram(this.program);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function createProgram(vertexShader, fragmentShader) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let program = gl.createProgram();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.attachShader(program, vertexShader);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.attachShader(program, fragmentShader);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.linkProgram(program);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!gl.getProgramParameter(program, gl.LINK_STATUS))</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.trace(gl.getProgramInfoLog(program));</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return program;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getUniforms(program) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let uniforms = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; uniformCount; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let uniformName = gl.getActiveUniform(program, i).name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>uniforms[uniformName] = gl.getUniformLocation(program, uniformName);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return uniforms;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function compileShader(type, source, keywords) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>source = addKeywords(source, keywords);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const shader = gl.createShader(type);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.shaderSource(shader, source);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.compileShader(shader);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.trace(gl.getShaderInfoLog(shader));</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return shader;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function addKeywords(source, keywords) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (keywords == null) return source;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let keywordsString = '';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>keywords.forEach(keyword =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>keywordsString += '#define ' + keyword + '\n';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return keywordsString + source;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const baseVertexShader = compileShader(gl.VERTEX_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>attribute vec2 aPosition;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 texelSize;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vUv = aPosition * 0.5 + 0.5;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vL = vUv - vec2(texelSize.x, 0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vR = vUv + vec2(texelSize.x, 0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vT = vUv + vec2(0.0, texelSize.y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vB = vUv - vec2(0.0, texelSize.y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_Position = vec4(aPosition, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const blurVertexShader = compileShader(gl.VERTEX_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>attribute vec2 aPosition;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 texelSize;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vUv = aPosition * 0.5 + 0.5;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float offset = 1.33333333;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vL = vUv - texelSize * offset;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vR = vUv + texelSize * offset;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_Position = vec4(aPosition, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const blurShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 sum = texture2D(uTexture, vUv) * 0.29411764;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vL) * 0.35294117;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vR) * 0.35294117;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = sum;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const copyShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = texture2D(uTexture, vUv);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const clearShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float value;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = value * texture2D(uTexture, vUv);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const colorShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec4 color;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = color;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const checkerboardShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float aspectRatio;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#define SCALE 25.0</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float v = mod(uv.x + uv.y, 2.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>v = v * 0.1 + 0.8;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(vec3(v), 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const displayShaderSource = `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uBloom;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uSunrays;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uDithering;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 ditherScale;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 texelSize;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>vec3 linearToGamma (vec3 color) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>color = max(color, vec3(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 c = texture2D(uTexture, vUv).rgb;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef SHADING</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 lc = texture2D(uTexture, vL).rgb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 rc = texture2D(uTexture, vR).rgb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 tc = texture2D(uTexture, vT).rgb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 bc = texture2D(uTexture, vB).rgb;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float dx = length(rc) - length(lc);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float dy = length(tc) - length(bc);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 n = normalize(vec3(dx, dy, length(texelSize)));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 l = vec3(0.0, 0.0, 1.0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>c *= diffuse;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef BLOOM</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 bloom = texture2D(uBloom, vUv).rgb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef SUNRAYS</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float sunrays = texture2D(uSunrays, vUv).r;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>c *= sunrays;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef BLOOM</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bloom *= sunrays;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef BLOOM</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float noise = texture2D(uDithering, vUv * ditherScale).r;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>noise = noise * 2.0 - 1.0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bloom += noise / 255.0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bloom = linearToGamma(bloom);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>c += bloom;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float a = max(c.r, max(c.g, c.b));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(c, a);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec3 curve;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float threshold;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 c = texture2D(uTexture, vUv).rgb;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float br = max(c.r, max(c.g, c.b));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float rq = clamp(br - curve.x, 0.0, curve.y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>rq = curve.z * rq * rq;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>c *= max(rq, br - threshold) / max(br, 0.0001);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(c, 0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 sum = vec4(0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vL);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vR);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vB);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum *= 0.25;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = sum;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float intensity;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 sum = vec4(0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vL);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vR);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum += texture2D(uTexture, vB);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>sum *= 0.25;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = sum * intensity;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const sunraysMaskShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 c = texture2D(uTexture, vUv);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float br = max(c.r, max(c.g, c.b));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = c;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const sunraysShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTexture;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float weight;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#define ITERATIONS 16</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float Density = 0.3;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float Decay = 0.95;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float Exposure = 0.7;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 coord = vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 dir = vUv - 0.5;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>dir *= 1.0 / float(ITERATIONS) * Density;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float illuminationDecay = 1.0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float color = texture2D(uTexture, vUv).a;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (int i = 0; i &lt; ITERATIONS; i++)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>coord -= dir;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>float col = texture2D(uTexture, coord).a;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>color += col * illuminationDecay * weight;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>illuminationDecay *= Decay;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const splatShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uTarget;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float aspectRatio;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec3 color;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 point;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float radius;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 p = vUv - point.xy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>p.x *= aspectRatio;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 splat = exp(-dot(p, p) / radius) * color;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec3 base = texture2D(uTarget, vUv).xyz;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(base + splat, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const advectionShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uVelocity;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uSource;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 texelSize;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform vec2 dyeTexelSize;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float dt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float dissipation;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 st = uv / tsize - 0.5;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 iuv = floor(st);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 fuv = fract(st);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#ifdef MANUAL_FILTERING</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 result = bilerp(uSource, coord, dyeTexelSize);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#else</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec4 result = texture2D(uSource, coord);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>#endif</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float decay = 1.0 + dissipation * dt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = result / decay;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}`,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']</span></p>
<p class="p1"><span class="s1">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uVelocity;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float L = texture2D(uVelocity, vL).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float R = texture2D(uVelocity, vR).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float T = texture2D(uVelocity, vT).y;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float B = texture2D(uVelocity, vB).y;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 C = texture2D(uVelocity, vUv).xy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (vL.x &lt; 0.0) { L = -C.x; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (vR.x &gt; 1.0) { R = -C.x; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (vT.y &gt; 1.0) { T = -C.y; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (vB.y &lt; 0.0) { B = -C.y; }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float div = 0.5 * (R - L + T - B);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(div, 0.0, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const curlShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uVelocity;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float L = texture2D(uVelocity, vL).y;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float R = texture2D(uVelocity, vR).y;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float T = texture2D(uVelocity, vT).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float B = texture2D(uVelocity, vB).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float vorticity = R - L - T + B;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision highp sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uVelocity;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uCurl;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float curl;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform float dt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float L = texture2D(uCurl, vL).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float R = texture2D(uCurl, vR).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float T = texture2D(uCurl, vT).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float B = texture2D(uCurl, vB).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float C = texture2D(uCurl, vUv).x;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>force /= length(force) + 0.0001;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>force *= curl * C;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>force.y *= -1.0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 velocity = texture2D(uVelocity, vUv).xy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>velocity += force * dt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>velocity = min(max(velocity, -1000.0), 1000.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(velocity, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const pressureShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uPressure;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uDivergence;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float L = texture2D(uPressure, vL).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float R = texture2D(uPressure, vR).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float T = texture2D(uPressure, vT).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float B = texture2D(uPressure, vB).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float C = texture2D(uPressure, vUv).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float divergence = texture2D(uDivergence, vUv).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float pressure = (L + R + B + T - divergence) * 0.25;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump float;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>precision mediump sampler2D;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vUv;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vL;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vT;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>varying highp vec2 vB;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uPressure;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>uniform sampler2D uVelocity;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>void main () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float L = texture2D(uPressure, vL).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float R = texture2D(uPressure, vR).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float T = texture2D(uPressure, vT).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>float B = texture2D(uPressure, vB).x;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>vec2 velocity = texture2D(uVelocity, vUv).xy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>velocity.xy -= vec2(R - L, T - B);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl_FragColor = vec4(velocity, 0.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const blit = (() =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.enableVertexAttribArray(0);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return (target, clear = false) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (target == null) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.bindFramebuffer(gl.FRAMEBUFFER, null);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.viewport(0, 0, target.width, target.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (clear) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.clearColor(1.0, 1.0, 1.0, 1.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.clear(gl.COLOR_BUFFER_BIT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// CHECK_FRAMEBUFFER_STATUS();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function CHECK_FRAMEBUFFER_STATUS() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (status != gl.FRAMEBUFFER_COMPLETE)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.trace("Framebuffer error: " + status);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">let dye;</span></p>
<p class="p1"><span class="s1">let velocity;</span></p>
<p class="p1"><span class="s1">let divergence;</span></p>
<p class="p1"><span class="s1">let curl;</span></p>
<p class="p1"><span class="s1">let pressure;</span></p>
<p class="p1"><span class="s1">let bloom;</span></p>
<p class="p1"><span class="s1">let bloomFramebuffers = [];</span></p>
<p class="p1"><span class="s1">let sunrays;</span></p>
<p class="p1"><span class="s1">let sunraysTemp;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">let ditheringTexture = createTextureAsync('LDR_LLL1_0.png');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const blurProgram = new Program(blurVertexShader, blurShader);</span></p>
<p class="p1"><span class="s1">const copyProgram = new Program(baseVertexShader, copyShader);</span></p>
<p class="p1"><span class="s1">const clearProgram = new Program(baseVertexShader, clearShader);</span></p>
<p class="p1"><span class="s1">const colorProgram = new Program(baseVertexShader, colorShader);</span></p>
<p class="p1"><span class="s1">const checkerboardProgram = new Program(baseVertexShader, checkerboardShader);</span></p>
<p class="p1"><span class="s1">const bloomPrefilterProgram = new Program(baseVertexShader, bloomPrefilterShader);</span></p>
<p class="p1"><span class="s1">const bloomBlurProgram = new Program(baseVertexShader, bloomBlurShader);</span></p>
<p class="p1"><span class="s1">const bloomFinalProgram = new Program(baseVertexShader, bloomFinalShader);</span></p>
<p class="p1"><span class="s1">const sunraysMaskProgram = new Program(baseVertexShader, sunraysMaskShader);</span></p>
<p class="p1"><span class="s1">const sunraysProgram = new Program(baseVertexShader, sunraysShader);</span></p>
<p class="p1"><span class="s1">const splatProgram = new Program(baseVertexShader, splatShader);</span></p>
<p class="p1"><span class="s1">const advectionProgram = new Program(baseVertexShader, advectionShader);</span></p>
<p class="p1"><span class="s1">const divergenceProgram = new Program(baseVertexShader, divergenceShader);</span></p>
<p class="p1"><span class="s1">const curlProgram = new Program(baseVertexShader, curlShader);</span></p>
<p class="p1"><span class="s1">const vorticityProgram = new Program(baseVertexShader, vorticityShader);</span></p>
<p class="p1"><span class="s1">const pressureProgram = new Program(baseVertexShader, pressureShader);</span></p>
<p class="p1"><span class="s1">const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const displayMaterial = new Material(baseVertexShader, displayShaderSource);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function initFramebuffers() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let simRes = getResolution(config.SIM_RESOLUTION);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let dyeRes = getResolution(config.DYE_RESOLUTION);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const texType = ext.halfFloatTexType;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const rgba = ext.formatRGBA;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const rg = ext.formatRG;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const r = ext.formatR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.disable(gl.BLEND);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (dye == null)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (velocity == null)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>initBloomFramebuffers();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>initSunraysFramebuffers();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function initBloomFramebuffers() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let res = getResolution(config.BLOOM_RESOLUTION);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const texType = ext.halfFloatTexType;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const rgba = ext.formatRGBA;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bloomFramebuffers.length = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; config.BLOOM_ITERATIONS; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let width = res.width &gt;&gt; (i + 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let height = res.height &gt;&gt; (i + 1);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (width &lt; 2 || height &lt; 2) break;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bloomFramebuffers.push(fbo);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function initSunraysFramebuffers() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let res = getResolution(config.SUNRAYS_RESOLUTION);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const texType = ext.halfFloatTexType;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const r = ext.formatR;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>sunrays = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>sunraysTemp = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function createFBO(w, h, internalFormat, format, type, param) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.activeTexture(gl.TEXTURE0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texture = gl.createTexture();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let fbo = gl.createFramebuffer();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.viewport(0, 0, w, h);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.clear(gl.COLOR_BUFFER_BIT);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texelSizeX = 1.0 / w;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texelSizeY = 1.0 / h;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texture,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>fbo,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>width: w,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>height: h,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texelSizeX,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texelSizeY,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>attach(id) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.activeTexture(gl.TEXTURE0 + id);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return id;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function createDoubleFBO(w, h, internalFormat, format, type, param) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let fbo1 = createFBO(w, h, internalFormat, format, type, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let fbo2 = createFBO(w, h, internalFormat, format, type, param);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>width: w,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>height: h,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texelSizeX: fbo1.texelSizeX,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texelSizeY: fbo1.texelSizeY,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>get read() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return fbo1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>set read(value) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>fbo1 = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>get write() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return fbo2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>set write(value) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>fbo2 = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>swap() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>let temp = fbo1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>fbo1 = fbo2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>fbo2 = temp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function resizeFBO(target, w, h, internalFormat, format, type, param) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let newFBO = createFBO(w, h, internalFormat, format, type, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>copyProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(newFBO);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return newFBO;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target.width == w &amp;&amp; target.height == h)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return target;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.write = createFBO(w, h, internalFormat, format, type, param);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.width = w;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.height = h;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.texelSizeX = 1.0 / w;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>target.texelSizeY = 1.0 / h;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return target;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function createTextureAsync(url) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let texture = gl.createTexture();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let obj = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>texture,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>width: 1,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>height: 1,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>attach(id) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.activeTexture(gl.TEXTURE0 + id);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return id;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let image = new Image();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>image.onload = () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>obj.width = image.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>obj.height = image.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.bindTexture(gl.TEXTURE_2D, texture);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>image.src = url;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return obj;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function updateKeywords() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let displayKeywords = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.SHADING) displayKeywords.push("SHADING");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.BLOOM) displayKeywords.push("BLOOM");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.SUNRAYS) displayKeywords.push("SUNRAYS");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>displayMaterial.setKeywords(displayKeywords);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">updateKeywords();</span></p>
<p class="p1"><span class="s1">initFramebuffers();</span></p>
<p class="p1"><span class="s1">multipleSplats(parseInt(Math.random() * 20) + 5);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">let lastUpdateTime = Date.now();</span></p>
<p class="p1"><span class="s1">let colorUpdateTimer = 0.0;</span></p>
<p class="p1"><span class="s1">update();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function update() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const dt = calcDeltaTime();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (resizeCanvas())</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>initFramebuffers();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>updateColors(dt);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>applyInputs();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!config.PAUSED)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>step(dt);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>render(null);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>requestAnimationFrame(update);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function calcDeltaTime() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let now = Date.now();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let dt = (now - lastUpdateTime) / 1000;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>dt = Math.min(dt, 0.016666);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>lastUpdateTime = now;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return dt;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function resizeCanvas() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let width = scaleByPixelRatio(canvas.clientWidth);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let height = scaleByPixelRatio(canvas.clientHeight);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (canvas.width != width || canvas.height != height) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>canvas.width = width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>canvas.height = height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return false;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function updateColors(dt) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!config.COLORFUL) return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (colorUpdateTimer &gt;= 1) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>pointers.forEach(p =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>p.color = generateColor();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function applyInputs() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (splatStack.length &gt; 0)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>multipleSplats(splatStack.pop());</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointers.forEach(p =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (p.moved) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>p.moved = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>splatPointer(p);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function step(dt) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.disable(gl.BLEND);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>curlProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(curl);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>vorticityProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(vorticityProgram.uniforms.dt, dt);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(velocity.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>velocity.swap();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>divergenceProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(divergence);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>clearProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(pressure.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pressure.swap();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pressureProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; config.PRESSURE_ITERATIONS; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blit(pressure.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>pressure.swap();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gradienSubtractProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(velocity.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>velocity.swap();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>advectionProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!ext.supportLinearFiltering)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let velocityId = velocity.read.attach(0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(advectionProgram.uniforms.dt, dt);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(velocity.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>velocity.swap();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!ext.supportLinearFiltering)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(dye.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>dye.swap();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function render(target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.BLOOM)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>applyBloom(dye.read, bloom);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.SUNRAYS) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>applySunrays(dye.read, dye.write, sunrays);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blur(sunrays, sunraysTemp, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target == null || !config.TRANSPARENT) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.enable(gl.BLEND);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.disable(gl.BLEND);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!config.TRANSPARENT)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>drawColor(target, normalizeColor(config.BACK_COLOR));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target == null &amp;&amp; config.TRANSPARENT)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>drawCheckerboard(target);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>drawDisplay(target);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function drawColor(target, color) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>colorProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(target);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function drawCheckerboard(target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>checkerboardProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(target);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function drawDisplay(target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let width = target == null ? gl.drawingBufferWidth : target.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let height = target == null ? gl.drawingBufferHeight : target.height;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>displayMaterial.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.SHADING)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.BLOOM) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let scale = getTextureScale(ditheringTexture, width, height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (config.SUNRAYS)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(target);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function applyBloom(source, destination) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (bloomFramebuffers.length &lt; 2)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let last = destination;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.disable(gl.BLEND);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bloomPrefilterProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let curve0 = config.BLOOM_THRESHOLD - knee;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let curve1 = knee * 2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let curve2 = 0.25 / knee;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(last);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bloomBlurProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; bloomFramebuffers.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let dest = bloomFramebuffers[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blit(dest);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>last = dest;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.blendFunc(gl.ONE, gl.ONE);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.enable(gl.BLEND);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = bloomFramebuffers.length - 2; i &gt;= 0; i--) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let baseTex = bloomFramebuffers[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.viewport(0, 0, baseTex.width, baseTex.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blit(baseTex);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>last = baseTex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.disable(gl.BLEND);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>bloomFinalProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform2f(bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(destination);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function applySunrays(source, mask, destination) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.disable(gl.BLEND);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>sunraysMaskProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(sunraysMaskProgram.uniforms.uTexture, source.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(mask);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>sunraysProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(sunraysProgram.uniforms.uTexture, mask.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(destination);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function blur(target, temp, iterations) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blurProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; iterations; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blit(temp);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(blurProgram.uniforms.texelSize, 0.0, target.texelSizeY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blit(target);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function splatPointer(pointer) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let dx = pointer.deltaX * config.SPLAT_FORCE;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let dy = pointer.deltaY * config.SPLAT_FORCE;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function multipleSplats(amount) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; amount; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const color = generateColor();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>color.r *= 10.0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>color.g *= 10.0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>color.b *= 10.0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const x = Math.random();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const y = Math.random();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const dx = 1000 * (Math.random() - 0.5);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const dy = 1000 * (Math.random() - 0.5);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>splat(x, y, dx, dy, color);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function splat(x, y, dx, dy, color) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>splatProgram.bind();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (window.innerWidth &lt;= 768) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// gl.uniform2f(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">    </span>splatProgram.uniforms.point,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">    </span>x / canvas.width,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">    </span>Math.abs(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">        </span>1.0 -</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">        </span>(y % window.innerHeight) / canvas.height +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">        </span>window.scrollY / window.innerHeight</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// <span class="Apple-converted-space">    </span>) % 1</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// );</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(splatProgram.uniforms.point, x, Math.abs(y + window.scrollY / window.innerHeight) % 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>gl.uniform2f(splatProgram.uniforms.point, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// gl.uniform2f(splatProgram.uniforms.point, x, y);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(velocity.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>velocity.swap();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blit(dye.write);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>dye.swap();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function correctRadius(radius) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let aspectRatio = canvas.width / canvas.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (aspectRatio &gt; 1)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>radius *= aspectRatio;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return radius;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">homePageBody.addEventListener('mouseover', e =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let posX = scaleByPixelRatio(e.clientX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let posY = scaleByPixelRatio(e.clientY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let pointer = pointers.find(p =&gt; p.id == -1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (pointer == null)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>pointer = new pointerPrototype();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>updatePointerDownData(pointer, -1, posX, posY);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">homePageBody.addEventListener('mousemove', e =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let pointer = pointers[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!pointer.down) return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// let posX = scaleByPixelRatio(e.offsetX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let posX = scaleByPixelRatio(e.clientX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// let posY = scaleByPixelRatio(e.offsetY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let posY = scaleByPixelRatio(e.clientY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>updatePointerMoveData(pointer, posX, posY);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">window.addEventListener('mouseup', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>updatePointerUpData(pointers[0]);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">homePageBody.addEventListener('touchstart', e =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const touches = e.targetTouches;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>while (touches.length &gt;= pointers.length)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>pointers.push(new pointerPrototype());</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; touches.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let posX = scaleByPixelRatio(touches[i].pageX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let posY = scaleByPixelRatio(touches[i].pageY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">homePageBody.addEventListener('touchmove', e =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const touches = e.targetTouches;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; touches.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let pointer = pointers[i + 1];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (!pointer.down) continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let posX = scaleByPixelRatio(touches[i].pageX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let posY = scaleByPixelRatio(touches[i].pageY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>updatePointerMoveData(pointer, posX, posY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}, false);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">window.addEventListener('touchend', e =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const touches = e.changedTouches;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; touches.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let pointer = pointers.find(p =&gt; p.id == touches[i].identifier);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (pointer == null) continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>updatePointerUpData(pointer);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function updatePointerDownData(pointer, id, posX, posY) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.id = id;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.down = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.moved = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.texcoordX = posX / canvas.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.texcoordY = 1.0 - posY / canvas.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.prevTexcoordX = pointer.texcoordX;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.prevTexcoordY = pointer.texcoordY;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.deltaX = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.deltaY = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.color = generateColor();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function updatePointerMoveData(pointer, posX, posY) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.prevTexcoordX = pointer.texcoordX;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.prevTexcoordY = pointer.texcoordY;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.texcoordX = posX / canvas.width;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.texcoordY = 1.0 - posY / canvas.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.moved = Math.abs(pointer.deltaX) &gt; 0 || Math.abs(pointer.deltaY) &gt; 0;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function updatePointerUpData(pointer) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>pointer.down = false;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function correctDeltaX(delta) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let aspectRatio = canvas.width / canvas.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (aspectRatio &lt; 1) delta *= aspectRatio;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return delta;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function correctDeltaY(delta) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let aspectRatio = canvas.width / canvas.height;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (aspectRatio &gt; 1) delta /= aspectRatio;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return delta;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function generateColor() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let c = HSVtoRGB(0.5, 0.96, 0.08);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>c = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>r: 197 / 255,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>g: 252 / 255,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>b: 252 / 255</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>c.r *= 0.15;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>c.g *= 0.15;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>c.b *= 0.15;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return c;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function HSVtoRGB(h, s, v) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let r, g, b, i, f, p, q, t;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>i = Math.floor(h * 6);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>f = h * 6 - i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>p = v * (1 - s);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>q = v * (1 - f * s);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>t = v * (1 - (1 - f) * s);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>switch (i % 6) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 0: r = v, g = t, b = p; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 1: r = q, g = v, b = p; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 2: r = p, g = v, b = t; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 3: r = p, g = q, b = v; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 4: r = t, g = p, b = v; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>case 5: r = v, g = p, b = q; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>r,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>b</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function normalizeColor(input) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let output = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>r: input.r / 255,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>g: input.g / 255,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>b: input.b / 255</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return output;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function wrap(value, min, max) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let range = max - min;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (range == 0) return min;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return (value - min) % range + min;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getResolution(resolution) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (aspectRatio &lt; 1)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>aspectRatio = 1.0 / aspectRatio;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let min = Math.round(resolution);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let max = Math.round(resolution * aspectRatio);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (gl.drawingBufferWidth &gt; gl.drawingBufferHeight)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return { width: max, height: min };</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return { width: min, height: max };</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getTextureScale(texture, width, height) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>x: width / texture.width,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>y: height / texture.height</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function scaleByPixelRatio(input) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let pixelRatio = window.devicePixelRatio || 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return Math.floor(input * pixelRatio);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function hashCode(s) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (s.length == 0) return 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let hash = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; s.length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>hash = (hash &lt;&lt; 5) - hash + s.charCodeAt(i);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>hash |= 0; // Convert to 32bit integer</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return hash;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p3"><span class="s1"></span><br></p>
<p class="p4"><span class="s1"></span><br></p>
<p class="p5"><span class="s1"></span><br></p>
<p class="p6"><span class="s1"></span><br></p>
<p class="p7"><span class="s1"></span><br></p>
<p class="p8"><span class="s1"></span><br></p>
</body>
</html>
