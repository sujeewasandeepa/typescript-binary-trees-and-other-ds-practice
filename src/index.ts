import { Node } from "./Node";

import {DepthFirstTraversal, DepthFirstTraversalRecursive, postOrderTraversal} from "./depth-first-traversal";
import TwoDArray from "./TwoDArray";

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left  = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = DepthFirstTraversal(a);
let resultRecursive = DepthFirstTraversalRecursive(a);
// console.log(resultRecursive);
// console.log(result);

let resultPostOrder = postOrderTraversal(a);
console.log(resultPostOrder);
TwoDArray();
