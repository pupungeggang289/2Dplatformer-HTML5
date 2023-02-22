window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');

    canvas.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('keydown', keyDown, false);
    window.addEventListener('keyup', keyUp, false);

    gameCurrentFrame = Date.now();
    gamePreviousFrame = Date.now();

    gameInstance = requestAnimationFrame(loop);
}

function loop() {
    gameCurrentFrame = Date.now();
    delta = gameCurrentFrame - gamePreviousFrame;

    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'Save') {
        loopSave();
    } else if (scene === 'Field') {
        loopField();
    }

    gamePreviousFrame = Date.now();
    gameInstance = requestAnimationFrame(loop);
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect;
    let x = event.clientX - canvasRect.left;
    let y = event.clientY - canvasRect.top;
    let button = event.button;

    if (scene === 'Title') {
        mouseUpTitle(x, y, button);
    } else if (scene === 'Save') {
        mouseUpSave(x, y, button);
    } else if (scene === 'Field') {
        mouseUpField(x, y, button);
    }
}

function keyDown(event) {
    let key = event.key;

    if (scene === 'Field') {
        keyDownField(key);
    }
}

function keyUp(event) {
    let key = event.key;

    if (scene === 'Field') {
        keyUpField(key);
    }
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
}

function rightClick() {
    return false;
}