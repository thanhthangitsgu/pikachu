import { _decorator, Component, Node, Prefab, SpriteFrame } from 'cc';
import { MatchContainController } from './MatchContainController';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    //----PIKACHU------
    @property({ type: Prefab})
    private listPikachuSprite: Prefab[] = [];

    public get ListPikachuSprite(): Prefab[] {
        return this.listPikachuSprite;
    }

    public set ListPikachuSprite(listPikachuSprite: Prefab[]) {
        this.listPikachuSprite = listPikachuSprite;
    }

    // -------- MATCH CONTAIN------------
    @property({ type: MatchContainController})
    private matchContain: MatchContainController = null;

    public get MatchContain(): MatchContainController {
        return this.matchContain;
    }

    public set MatchContain(matchContain: MatchContainController) {
        this.matchContain = matchContain;
    }
}

