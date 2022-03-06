import { Component, OnInit } from '@angular/core';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //////////////////////////////////////////////////////////////////////////////////////////////////////// SCENE
    
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff);
    // scene.add(new THREE.AxesHelper(5))

    //////////////////////////////////////////////////////////////////////////////////////////////////////// LIGHT
    const width = 10;
    const height = 10;
    const intensity = 7;
    const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
    rectLight.position.set( -7, 5, 5 );
    rectLight.lookAt( 0, 0, 0 );
    scene.add( rectLight )

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    //////////////////////////////////////////////////////////////////////////////////////////////////////// CAMERA
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
    )
    camera.position.z = 4
    camera.position.x = -4

    //////////////////////////////////////////////////////////////////////////////////////////////////////// RENDERER
    const renderer = new THREE.WebGLRenderer()
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true
    //renderer.outputEncoding = THREE.sRGBEncoding

    let renderWidth:any = window.innerWidth;
    let renderHeight:any = window.innerHeight;
  
    renderer.setSize(renderWidth, renderHeight)
    document.body.appendChild(renderer.domElement)

    //////////////////////////////////////////////////////////////////////////////////////////////////////// ORBIT
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false;
    controls.enableRotate = true
    controls.enablePan = false

    //////////////////////////////////////////////////////////////////////////////////////////////////////// MODEL LOADER
    const loader = new GLTFLoader()
    loader.load(
        'assets/scene.gltf',
        function (gltf) {
            scene.add(gltf.scene);
         
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    
    //////////////////////////////////////////////////////////////////////////////////////////////////////// WINDOW
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

    function animate() {
        requestAnimationFrame(animate)
        controls.update()
        render()
    }

    function render() {
        renderer.render(scene, camera)
      
      
    }

    function animateSphere(s:any){

      s.rotation.y += 0.01;
    }

    animate()
  }
}
