interface CodeGenerator {
  _src: string;
  _data: any[];
}

/**
 * フロントから渡ってきたStoreのデータをもとに
 * Three.jsレンダリング用のソースコードに変換する
 */
class CodeGenerator implements CodeGenerator {

  // テスト用カラーコード
  _testColor = 0x6699FF;

  /**
   * @constructor
   * 初期化
   */
  constructor() {
    this._src = '';
    this._data = null;
  };
  
  /**
   * 渡ってきたJSONからデータを抽出し、セット
   */
  setData(data) {
    const result = data.map(d => d.data);
    this._data = result;
    return this;
  }

  /**
   * 作成するThree.js Objectのタイプを判定する
   * @param data 
   */
  checkObjectType(data) {
    switch (data.geometry) {
      case 'Sphere':
        this.createSphere(data);
        break;
    
      case 'Cube':
        this.createCube(data);
        break;

      case 'Plane':
        this.createPlane(data);
        break;
      
      default: break;
    }
  }

  /**
   * 作成するオブジェクトのマテリアルを判定する
   * 対応するコンストラクタを返す
   */
  checkMaterialType(geometryStr, color) {
    switch (geometryStr) {
      case 'MeshBasic': return ` new THREE.MeshBasicMaterial({color: ${color}});`;

      case 'MeshLambert': return ` new THREE.MeshLambertMaterial({color: ${color}});`;

      case 'MeshPhong': return ` new THREE.MeshPhongMaterial({color: ${color}});`;
    
      default: return '';
    }
  }

  /**
   * 初期化メソッドを書き始める
   */
  startInitWriting() {
    this._src += '\'use strict\';';
    // 共通の初期化処理を書き始める
    this._src += 'function init() {';
    this._src += `var webGLOutput = document.getElementById('WebGL-output');`;
    // すでに存在するcanvasを削除して初期化
    this._src += `while(webGLOutput.firstChild) {webGLOutput.removeChild(webGLOutput.firstChild);}`
    this._src += `var canvasWidth = webGLOutput.getBoundingClientRect().width;`;
    //this._src += `var canvasWidth = webGLOutput.offsetWidth;`;
    this._src += `var canvasHeight = webGLOutput.getBoundingClientRect().height;`;
    //this._src += `var canvasHeight = webGLOutput.offsetHeight;`;
    // シーンを作成
    this._src += `var scene = new THREE.Scene();`;

    // レンダラを作成
    this._src += `var renderer = new THREE.WebGLRenderer({webGLOutput});`;
    this._src += `renderer.setClearColor(new THREE.Color(0xEEEEEE));`;
    this._src += `renderer.setPixelRatio(window.devicePixelRatio);`;
    this._src += `renderer.setSize(canvasWidth, canvasHeight);`;
    // this._src += `var canvasWidth = renderer.domElement.getBoundingClientRect().width`;
    // this._src += `var canvasHeight = renderer.domElement.getBoundingClientRect().height`;
    // カメラを作成
    this._src += `var camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 1000);`;
  }

  /**
   * 初期化メソッドを書くのやめる
   */
  finishInitWriting() {
    // カメラ調整
    this._src += `camera.position.x = 0;`;
    this._src += `camera.position.y = 0;`;
    this._src += `camera.position.z = 100;`;
    this._src += `camera.lookAt(scene.position);`;
    this._src += `camera.aspect = canvasWidth / canvasHeight;`;
    this._src += `camera.updateProjectionMatrix();`;
    // canvasを追加
    this._src += `document.getElementById("WebGL-output").appendChild(renderer.domElement);`; 
    // レンダー
    this._src += `renderer.render(scene, camera);`;
    // initメソッドを閉じる
    this._src += '}';
    // 即時関数をセット
    this._src += `(function() {init();})();`;
  }

  /**
   * Planeオブジェクト作成
   */
  createPlane(data) {
    // create the ground plane
    // var planeGeometry = new THREE.PlaneGeometry(60, 20);
    // var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
    // var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    // plane.rotation.x = -0.5 * Math.PI;
    // plane.position.x = 15;
    // plane.position.y = 0;
    // plane.position.z = 0;

    // add the plane to the scene
    // scene.add(plane);
  }

  /**
   * Cubeオブジェクト作成
   */
  createCube(data) {
    this._src += `var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);`;
    this._src += `var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});`;
    this._src += `var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);`;

    this._src += `cube.position.x = -4;`;
    this._src += `cube.position.y = 3;`;
    this._src += `cube.position.z = 0;`;

    this._src += `scene.add(cube);`;
  }

  /**
   * Sphereオブジェクト作成
   */
  createSphere(data) {
    // create a sphere
    this._src += `var sphereGeometry_${data.id} = new THREE.SphereGeometry(${data.size.x}, ${data.size.y}, ${data.size.z});`;
    this._src += `var sphereMaterial_${data.id} = ${this.checkMaterialType(data.material, this._testColor)}`;
    this._src += `var sphere_${data.id} = new THREE.Mesh(sphereGeometry_${data.id}, sphereMaterial_${data.id});`;
    this._src += `sphere_${data.id}.position.set(${data.position.x}, ${data.position.y}, ${data.position.x});`;
    this._src += `scene.add(sphere_${data.id});`;
  }

  /**
   * 初期化処理まとめ
   */
  init() {
    console.log(this._data);

    // initメソッド書き始める
    this.startInitWriting();
    // データがある場合のみObjectを作成する
    if (this._data) {
      this._data.forEach(d => {
        this.checkObjectType(d);
        this.createCube(d);
      });
    }
    // initメソッド終了
    this.finishInitWriting();
  };

  /**
   * 生成済みのソースコードを返す
   */
  getAsText() {
    return this._src;
  }
}

module.exports = CodeGenerator;
