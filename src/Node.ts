export class Node {
        value: number;
        left: Node | null;
        right: Node | null;

        constructor (value: any) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
