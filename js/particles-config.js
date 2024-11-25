particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,  // Número de partículas
        "density": {
          "enable": true,
          "value_area": 800  // Área donde las partículas se generarán
        }
      },
      "color": {
        "value": "#00BFFF"  // Color de las partículas (puedes cambiarlo)
      },
      "shape": {
        "type": "circle",  // Forma de las partículas
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 3,  // Tamaño de las partículas
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,  // Distancia entre partículas
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      }
    },
    "retina_detect": true
  });
  