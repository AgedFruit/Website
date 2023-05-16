import type { ISourceOptions } from 'tsparticles';

const options: ISourceOptions = {
  retinaDetect: true,
  fpsLimit: 165,
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#6272a4', '#8be9fd', '#ff79c6', '#50fa7b', '#bd93f9', '#f1fa8c'],
    },
    shape: {
      type: 'square',
      stroke: {
        width: 0,
        color: '000',
      },
      polygon: {
        sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        minimumValue: 0.5,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 1,
      },
      anim: {
        enable: false,
        speed: 30,
        minimumValue: 0.1,
        sync: true,
      },
    },
    links: {
      enable: true,
      distance: 75,
      color: '999',
      opacity: 0.9,
      width: .6,
      consent: true,
      blink: true,
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 100,
        duration: 1,
        speed: 5,
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 3,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 1,
      },
    },
  },
  key: '3m@62^K^88745%',
};

export default options;
