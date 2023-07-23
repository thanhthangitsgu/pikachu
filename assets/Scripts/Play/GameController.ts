import { GameModel } from "./GameModel";
import { Data, GameConfig } from "../Data";
import {
  _decorator,
  Component,
  instantiate,
  Node,
  Sprite,
  Size,
  Prefab,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
  @property({ type: GameModel })
  private gameModel: GameModel = null;

  protected onLoad(): void {
    const data = Data[GameConfig.level];
  }

  start() {
    this.spawnPikachuPrefab();
  }

    protected spawnPikachuPrefab(): void {
        // const rows = Data[GameConfig.level].sizeBackGround.rows;
        // const columns = Data[GameConfig.level].sizeBackGround.columns;

        // const matchContain = this.gameModel.MatchContain;
        // const matchSize = matchContain.SizeBackGround;
        // const totalCells = rows * columns;
        // const pikachuPrefabCount = this.gameModel.ListPikachuSprite.length;

        // const matchWidth = matchContain.Width;
        // const matchHeight = matchContain.Height;

        // for (let i = 0; i < totalCells; i++) {
        // const pikachuPrefabIndex = Math.floor(Math.random() * pikachuPrefabCount);
        // const pikachuPrefab = this.gameModel.ListPikachuSprite[pikachuPrefabIndex];

        // const pikachuNode = instantiate(pikachuPrefab);
        // matchContain.node.addChild(pikachuNode);

        // const randomX = Math.random() * (matchWidth - pikachuNode.width) - matchWidth / 2;
        // const randomY = Math.random() * (matchHeight - pikachuNode.height) - matchHeight / 2;

        // pikachuNode.setPosition(new Vec3(randomX, randomY, 0));
        // }
    }
}
