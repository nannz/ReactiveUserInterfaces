/**
 * Created by zhaonan on 2018/2/25.
 */
import React, {Component} from 'react';
import * as THREE from 'three';
// import * as ReactTHREE from 'react-three';

class Shape extends Component {
    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const width = this.mount.clientWidth;//clientWidth vd innerWidth?
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        //render
        const renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xff0000), 1.0);
        renderer.setSize(width, height);
        renderer.shadowMapEnabled = true;
        //geometry
        const cubeGeometry = new THREE.BoxGeometry(14, 14, 14);
        //material
        const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xEEEEEE});
        //actual object
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        //add
        cube.position.x = -5;
        cube.position.y = 3;
        cube.position.z = 0;
        scene.add(cube);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material =  cubeMaterial;
        this.cube = cube;

        this.mount.appendChild(this.renderer.domElement);
        this.start();

    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId);
    }

    animate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }


    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (

            <div className="Shape"
                 style={{ width: '400px', height: '400px' }}
                 ref={(mount) => { this.mount = mount }}
            >

            </div>
        );
    }
}

export default Shape;
