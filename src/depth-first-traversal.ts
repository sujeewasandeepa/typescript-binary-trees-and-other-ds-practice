import { Node } from "./Node";

// this is the pre order traversal
export function DepthFirstTraversal (root: Node | null) :any {
    const stack = [root];
    const result:any = [];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current?.value);

        if (current?.right) stack.push(current.right);
        if (current?.left) stack.push(current.left);
    }

    return result;
}

export function DepthFirstTraversalRecursive (root: Node | null) :any {
    if (root == null) return [];
    const leftVals = DepthFirstTraversalRecursive(root.left);
    const rightVals = DepthFirstTraversalRecursive(root.right);
    return [root.value, ... leftVals, ... rightVals];
}