var TowerDefense = TowerDefense || {};

TowerDefense.LoadingState = function () {
    "use strict";
    Phaser.State.call(this);
};

TowerDefense.LoadingState.prototype = Object.create(Phaser.State.prototype);
TowerDefense.LoadingState.prototype.constructor = TowerDefense.LoadingState;

TowerDefense.LoadingState.prototype.init = function (next_state) {
    "use strict";
    this.next_state = next_state;
};

TowerDefense.LoadingState.prototype.preload = function () {
    "use strict";
    this.game.load.image('ground_1x1', '/tower-defense/assets/tilemaps/tiles/ground_1x1.png');
    this.game.load.image('tempGround', '/tower-defense/assets/tilemaps/tiles/ground_temp_tile48.png');
    this.game.load.image('tempWall', '/tower-defense/assets/tilemaps/tiles/tower_temp_tile48.png');
    this.game.load.image('car', '/tower-defense/assets/car90.png');
    this.game.load.image('star', '/tower-defense/assets/star.png');
    this.game.load.image('freeze', '/tower-defense/assets/freeze.png');
    this.game.load.image('diamond', '/tower-defense/assets/diamond.png');
    this.game.load.image('bullet', '/tower-defense/assets/bullet.png');
    this.game.load.image('rocket', '/tower-defense/assets/rocket.png');
    this.game.load.image('machine-tower', '/tower-defense/assets/machine-tower48.png');
    this.game.load.image('rocket-tower', '/tower-defense/assets/rocket-tower48.png');
    this.game.load.image('freeze-tower', '/tower-defense/assets/freeze-tower48.png');
    this.game.load.image('tesla-tower', '/tower-defense/assets/tesla-tower48.png');
    this.game.load.image('runnerBasic', '/tower-defense/assets/runnerBasic.png');
    this.game.load.image('arrow', '/tower-defense/assets/cannon.png');
    this.game.load.image('runnerTank', '/tower-defense/assets/runnerTank.png');
    this.game.load.spritesheet('runner', '/tower-defense/assets/runner2.png', 57.6, 48);
    this.game.load.spritesheet('explosion', '/tower-defense/assets/ex1.png', 50, 50);
    this.game.load.spritesheet('explosion-freeze', '/tower-defense/assets/freeze-explosion.png', 50, 50);
    this.game.load.image("background", "/tower-defense/assets/map.jpg");
};

TowerDefense.LoadingState.prototype.create = function () {
    "use strict";
    this.game.state.start(this.next_state, true, false);
};
