import { Component, Input, OnInit } from '@angular/core';

// import * as THREE from 'three'
// import { TetrahedronGeometry } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent implements OnInit {
  // @Input() texture:string = "/assets/leaf.png";


  // private loader = new THREE.TextureLoader();
  // private geometry = new  THREE.BoxGeometry( 1, 1, 1 );
  // private material = new THREE.MeshBasicMaterial({map:this.loader.load(this.texture)});
   
  constructor() { }

  ngOnInit(): void {
  // //////////////////////////////////////////////////////////////////////////////////////////////////////// SCENE
  // const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xFDF6E3);

  // //////////////////////////////////////////////////////////////////////////////////////////////////////// LIGHT
  // const light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( - 3, 10, - 10 );
  // light.castShadow = true;
  // light.shadow.camera.top = 2;
  // light.shadow.camera.bottom = - 2;
  // light.shadow.camera.left = - 2;
  // light.shadow.camera.right = 2;
  // light.shadow.camera.near = 0.1;
  // light.shadow.camera.far = 40;

  // scene.add(light);

  // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
  // hemiLight.position.set( 0, 20, 0 );
  // scene.add( hemiLight );



  // //////////////////////////////////////////////////////////////////////////////////////////////////////// CAMERA
  // const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     1000
  // )
  // camera.position.z = 2

  // //////////////////////////////////////////////////////////////////////////////////////////////////////// RENDERER
  // const renderer = new THREE.WebGLRenderer()
  // renderer.physicallyCorrectLights = true

  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
  // renderer.outputEncoding = THREE.sRGBEncoding
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // document.getElementById("model-container")?.appendChild(renderer.domElement)

  // //////////////////////////////////////////////////////////////////////////////////////////////////////// ORBIT CONTROLS
  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableDamping = true
  // controls.enableZoom = false;

  // //////////////////////////////////////////////////////////////////////////////////////////////////////// PLANE
  // // const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0xffffff, depthWrite: false } ) );
  // // mesh.position.y = -3
  // // mesh.rotation.x = - Math.PI / 2;
  // // mesh.receiveShadow = true;
  // // scene.add( mesh );

  // //////////////////////////////////////////////////////////////////////////////////////////////////////// OBJECT
  // const sphere = new THREE.Mesh( this.geometry, this.material );
  // sphere.castShadow = true
  // sphere.receiveShadow = true
  // scene.add( sphere );


  // //////////////////////////////////////////////////////////////////////////////////////////////////////// WINDOW RESIZE
  // window.addEventListener('resize', onWindowResize, false)
  // function onWindowResize() {
  //     camera.aspect = window.innerWidth / window.innerHeight
  //     camera.updateProjectionMatrix()
  //     renderer.setSize(window.innerWidth, window.innerHeight)
  //     render()
  // }


  // function animate() {
  //     requestAnimationFrame(animate)
  //     controls.update()
  //     render()
  // }

  // function render() {
  //     renderer.render(scene, camera)
  //     animateSphere(sphere)
  // }

  // function animateSphere(s:any){
  //   s.rotation.y += 0.01;
  // }

  // animate()

  }
}
