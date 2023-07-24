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

    private row: number = 6;

    private column: number = 10;

    private listNumber: number[] = [];

    private listCharacterNode: Node[] = [];

    private dataMatrix: Array<Array<number>> = [];

    protected start(): void {
        this.genData();
    }

    private genData(): void {
        const data = config;

        //Lấy số lượng character từ config
        for (let i = 0; i < config.length; i++) {
            this.listNumber.push(config[i]);
        };

        //Tạo mảng character    
        for (let i = 0; i < this.listNumber.length; i++) {
            let total = this.listNumber[i];

            for (let j = 0; j < total; j++) {
                let character = instantiate(this.prefabCharacter);

                character.getComponent(Character).setSprite(this.listSpriteCharacter[i]);
                character.getComponent(Character).setType(i);

                this.listCharacterNode.push(character);
            }
        }

        console.log(this.listCharacterNode);

        //Random lại vị trí node
        // this.shuffleListNode();

        //Cập nhật ma trận
         this.updateMatrix();

        //Spaw UI
        this.listCharacterNode.map((item) => {
            this.matchContain.addChild(item)
        });
    }

    /**
     * Random lại vị trí của các phần tử trong mảng => Ma trận tạo ra cũng sẽ được random
     */
    private shuffleListNode() {

        for (let i = this.listCharacterNode.length - this.column - 1; i > this.row; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.listCharacterNode[i], this.listCharacterNode[j]] = [this.listCharacterNode[j], this.listCharacterNode[i]];
        }
    }

    private updateMatrix(): void {
        //Xây dựng ma trận từ danh sách character
        this.dataMatrix = [];
        for (let i = 0; i <= this.row + 1; i++) {
            let array = new Array(this.column + 2);
            array.fill(-1, 0, this.column + 2);
            this.dataMatrix.push(array);
        }

        for (let i = 0; i < this.row + 2; i++)
            for (let j = 0; j < this.column + 2; j++) this.dataMatrix[i][j] = this.listCharacterNode[i * (this.column + 2) + j].getComponent(Character).getType();

        
    }
}

