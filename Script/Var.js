let canvas;
let context;
let canvasRect;
let gameInstance;
let gameCurrentFrame;
let gamePreviousFrame;
let delta;
let lang = 'en';

let scene = 'Title';
let state = '';
let clickMode = '';

let worldVar = {
    place : '',
    position : [],
    monster : [],
    terrain : [],
    wall : [],

    gravity : 600,
};

let playerVar = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    level : 1,
    exp : 0,
    expMax : 0,

    speed : 160,
    ySpeed : 0,
    jump : 1,
    jumpPower : -400,
};
