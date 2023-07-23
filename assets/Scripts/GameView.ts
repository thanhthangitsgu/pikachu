import { _decorator, Component, instantiate, math, Node, Prefab, SpriteFrame } from 'cc';
import { config } from './Data';
import { Character } from './Character';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property({
        type: Node,
        tooltip: "Match Contain"
    })
    private matchContain: Node;

    @property({
        type: SpriteFrame
    })
    private listSpriteCharacter: SpriteFrame[] = [];

    @property({
        type: Prefab
    })
    private prefabCharacter: Prefab;

    private row: number = 10;

    private column: number = 6;

    private listNumber: number[] = [];

    private listCharacterNode: Node[] = [];

    private genData(): void {
        const data = config;

        //Set số lượng character
        this.listCharacterNode.length = this.row * this.column;

        //Random số lượng character (Cái này em set cứng trước cũng được)
        for (let i = 0; i < config.length; i++) {
            let number = math.randomRangeInt(config[i][0], config[i][1]);
            this.listNumber.push(number);
        }

        //Tính tổng và lấy số lượng character cuối cùng
        let sum = this.listNumber.reduce((total, item) => total + item, 0);
        this.listNumber.push(this.row * this.column - sum);

        //Mảng lưu vị trí để random
        let listLocation = [];
        for (let i = 0; i < this.row * this.column; i++) listLocation.push(i);

        for (let i = 0; i < config.length; i++) {
            let total = this.listNumber[i];

            for (let j = 0; j < total; j++) {
                let indexRandom = math.randomRangeInt(0, listLocation.length);
                listLocation.splice(indexRandom, 1);

                let character = instantiate(this.prefabCharacter);
                character.getComponent(Character).setSprite(this.listSpriteCharacter[indexRandom]);
                character.getComponent(Character).setType(indexRandom);

            }
        }
    }
}

