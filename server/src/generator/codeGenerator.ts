interface CodeGenerator {
  _src: string;
}

class CodeGenerator implements CodeGenerator {
  constructor() {
    this._src = '';
  };

  init() {
    this._src += '\'use strict\';';
    this._src += 'var scene = new THREE.Scene();';
    this._src += 'var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );';
    this._src += 'var renderer = new THREE.WebGLRenderer();'
    this._src += 'renderer.setSize( window.innerWidth, window.innerHeight );';
    this._src += 'document.body.appendChild( renderer.domElement );';
    this._src += `var geometry = new THREE.BoxGeometry( 1, 1, 1 );var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );var cube = new THREE.Mesh( geometry, material );scene.add( cube );camera.position.z = 5;var animate = function () {requestAnimationFrame( animate );cube.rotation.x += 0.01;cube.rotation.y += 0.01;renderer.render( scene, camera );};animate();`;
  };

  getAsText() {
    return this._src;
  }
}

module.exports = CodeGenerator;
