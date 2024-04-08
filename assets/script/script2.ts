import { _decorator, Component, Node, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("script2")
export class script2 extends Component {
    @property({ type: Node })
    img: Node = null;

    start() {}

    update(deltaTime: number) {}
    onClick() {
        console.log(this.img.getComponent(UITransform).contentSize);
    }
}
