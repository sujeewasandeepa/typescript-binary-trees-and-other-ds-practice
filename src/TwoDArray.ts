let twoDarr = [
[['a11'], ['a12'], ['a13'], ['a14']], 
[['a21'], ['a22'], ['a23'], ['a24']],
[['a31'], ['a32'], ['a33'], ['a34']],
[['a41'], ['a42'], ['a43'], ['a44']]
]

let upperTriangle:string[][] = [];
let lowerTriangle:string[][] = [];
let diagonal:string[][] = [];

const printArr = (arr:string[][]) => {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

const TwoDArray = ():any => {
    for (let i=0; i<twoDarr.length; i++) {
        
        for (let j=0; j<=i; j++) {

            if (j == i) {
                diagonal.push(twoDarr[i][j]);
            }else {
                lowerTriangle.push(twoDarr[i][j]);
            }
       }

        for (let j=i+1; j<twoDarr.length; j++) {
            upperTriangle.push(twoDarr[i][j]);
        }

    }
    console.log('diagonal: ');
    printArr(diagonal);
    console.log('lower triangle: ');
    printArr(lowerTriangle);
    console.log('upper triangle: ');
    printArr(upperTriangle);
}


export default TwoDArray;