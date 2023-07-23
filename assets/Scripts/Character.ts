import { _decorator, Component, Node, Sprite, SpriteFrame, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Character')
export class Character extends Component {
    //Node mặc định
    @property({
        type: Node,
        tooltip: "Main sprite"
    })
    private normalNode: Node;

    //Node bóng để tô đen khi click
    @property({
        type: Node,
        tooltip: "Pressed Node"
    })
    private pressedNode: Node;

    // Xác định xem node đã được click hay chưa
    private isClicked: boolean = false;

    //Vị trí của node trong mảng
    private location: Vec2 = new Vec2();

    //Lưu đường đi đến một node khác
    private listPath: Map<Node, Array<Node>> = new Map();

    //Loại character
    private type: number = 0;

    protected onLoad(): void {

    }

    protected start(): void {

    }

    private getPath(): void {

    }

    public updateIsClicked(): void {
        this.pressedNode.active = this.isClicked;
        this.isClicked = !this.isClicked;
    }

    public setSprite(sprite: SpriteFrame): void {
        this.normalNode.getComponent(Sprite).spriteFrame = sprite;
    }

    public setType(type: number): void {
        this.type = type;
    }
}

