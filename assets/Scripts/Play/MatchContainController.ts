import { Data, GameConfig } from '../Data';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MatchContainController')
export class MatchContainController extends Component {
    private sizeBackGround: number = 0;;
    private width: number = 0;
    private height: number = 0;

    public get SizeBackGround() : number {
        return this.sizeBackGround;
    }

    public set SizeBackGround(sizeBackGround : number) {
        this.sizeBackGround = sizeBackGround;
    }
    
    public get Width() : number {
        return this.width;
    }

    public set Width(width : number) {
        this.width = width;
    }

    public get Height() : number {
        return this.height;
    }

    public set Height(height : number) {
        this.height = height;
    }
    start() {
        this.updateSize(GameConfig.level);
    }

    private updateSize(level: number) {
        const data = Data[level];
        this.width = this.node.width;
        this.node.width = data.widthBackGround;
        this.height = this.node.height;
        this.node.height = data.heightBackGround;
        console.log(this.width)
        console.log(this.height)
    }

    addChild(pikachuNode: Node) {
        throw new Error("Method not implemented.");
    }
    
    protected onLoad(): void {
        console.log(this.node.width)
    }
    
}

