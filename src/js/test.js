console.log("javascript affirmative");

// raycaster test
AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
  
    init: function () {
      this.el.addEventListener('raycaster-intersection', function () {
        console.log('Player hit something!');
      });
    }
  });
  

  AFRAME.registerComponent("listener", {
    schema : 
    {
      stepFactor : {
        type : "number",
        default : 0.05
      }
    },
    init: function () {
      var direction = new THREE.Vector3();
      console.log(direction);
    },
    tick : function(){	
      this.el.components.camera.camera.parent.position.add(this.el.components.camera.camera.getWorldDirection().multiplyScalar(this.data.stepFactor));
      // console.log("tick");
    }
  });

  // DUST

  AFRAME.registerComponent('dust-test', {
        init: function () {
            let sceneEl = this.el;
            console.log("dust-test init");

            let cameraEl = sceneEl.querySelector('[camera]');
            let dustEl = sceneEl.querySelector('a-dust');

            // delays setup until there's some slack time
            requestIdleCallback( () => {
                dustEl.components.dust.setCamera(cameraEl);
            });
        }
    });