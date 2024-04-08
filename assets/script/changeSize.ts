import { _decorator, Component, Sprite, UI, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("changeSize")
export class changeSize extends Component {
    @property({ type: Sprite })
    img: Sprite = null;
    start() {}

    update(deltaTime: number) {}
    onClick() {
        console.log(this.img.getComponent(UITransform).contentSize);
        this.img.getComponent(UITransform).height = 100;
        console.log(this.img.getComponent(UITransform).contentSize);
    }
}
