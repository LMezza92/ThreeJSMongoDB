import { Component, Input, OnInit } from '@angular/core';

import * as THREE from 'three'
import { TetrahedronGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Object3D} from 'three';

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent implements OnInit {
  @Input() texture:string = "/assets/leaf.png";


  private loader = new THREE.TextureLoader();
  private geometry = new  THREE.BoxGeometry( 1, 1, 1 );
  private material = new THREE.MeshBasicMaterial({map:this.loader.load(this.texture)});
  private sphere = new THREE.Mesh( this.geometry, this.material );
  constructor() { }

  ngOnInit(): void {

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFDF6E3);
  const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
)
const renderer = new THREE.WebGLRenderer({ antialias: true })
  hemiLight.position.set( 0, 20, 0 );
  scene.add( hemiLight );
  camera.position.z = 3
const  orbit = new THREE.Object3D();

  //////////////////////////////////////////////////////////////////////////////////////////////////////// CAMERA
  


  //////////////////////////////////////////////////////////////////////////////////////////////////////// RENDERER
  
  renderer.physicallyCorrectLights = true

  this.sphere.castShadow = true
  this.sphere.receiveShadow = true
  scene.add( this.sphere );
  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById("model-container")?.appendChild(renderer.domElement)

  //////////////////////////////////////////////////////////////////////////////////////////////////////// ORBIT CONTROLS
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = false;

  document.addEventListener('mousemove', function(e){
    let scale = 1;
    orbit.rotateY( e.movementX * scale );
    orbit.rotateX( e.movementY * scale ); 
    orbit.rotation.z = 0; //this is important to keep the camera level..
  })
  
  //the camera rotation pivot
  
  orbit.rotation.order = "YXZ"; //this is important to keep level, so Z should be the last axis to rotate in order...
  orbit.position.copy( this.sphere.position );
  scene.add(orbit );
  //////////////////////////////////////////////////////////////////////////////////////////////////////// PLANE
  // const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0xffffff, depthWrite: false } ) );
  // mesh.position.y = -3
  // mesh.rotation.x = - Math.PI / 2;
  // mesh.receiveShadow = true;
  // scene.add( mesh );

  //////////////////////////////////////////////////////////////////////////////////////////////////////// OBJECT




  //////////////////////////////////////////////////////////////////////////////////////////////////////// WINDOW RESIZE
  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      render()
  }



  function animate() {
      requestAnimationFrame(animate)
      //controls.update()
      render()
  }

  function render() {
      renderer.render(scene, camera)
     // animateSphere(sphere)
  }

  function animateSphere(s:any){
    //s.rotation.y += 0.01;
  }

  animate()

  }
}
