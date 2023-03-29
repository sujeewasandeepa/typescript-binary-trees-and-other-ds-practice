import { Node } from "./Node";

export default function DepthFirstTraversal (root: Node | null) {
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current?.value);

        if (current?.right) stack.push(current.right);
        if (current?.left) stack.push(current.left);
    }
}
