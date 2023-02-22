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
};

let playerVar = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    level : 1,
    exp : 0,
    expMax : 0,
};
