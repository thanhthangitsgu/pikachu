import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    private row: number = 10; 

    private colum: number = 6;

    private genData(): void {

    }
}

