import {Player} from "../gameObjects/Player";
import { Posion } from "../gameObjects/Projectiles";
export class Rider extends Player{
    constructor(scene,x,y,key,textureName,healthPoints = 100,movementSpeed=128){
        super(scene,x,y,key,textureName,healthPoints = 500);
        this.movementSpeed=movementSpeed;

    }



    createWeapon(scene) {
        this.bullets = scene.physics.add.group({ classType: Posion, runChildUpdate: true });
        this.attack = () => {
            let bullet = this.bullets.get();
            scene.children.add(bullet);
            bullet.place(this);
        };

    this.removeWeapon = () => { //destroys the weapon used
        this.bullets.destroy();
        this.attack = null;
        };

    }
 

}