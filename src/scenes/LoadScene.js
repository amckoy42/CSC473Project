import {CST} from "../CST";
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){
        
    }

    preload(){

        //add Loading image, sound and spritesheet
        this.load.image('key1', './assets/title_bg.jpg');
        this.load.image("StartButton", "./assets/StartButton.png");
        this.load.image("cursor", "./assets/fight.png");
        this.load.image("fire","./assets/SkillEffect1.png");

        this.load.atlas("magic", "./assets/sprite/magic.png", "./assets/sprite/magic.json");
        this.load.atlas("wolf", "./assets/sprite/wolf.png", "./assets/sprite/wolf.json");

        this.load.audio("menuMusic", "./assets/music/Rise of spirit.mp3");

        this.load.audio("beginsound", "./assets/soundeffect/metal-clash.wav");
   
    }

    create(){
    }
}