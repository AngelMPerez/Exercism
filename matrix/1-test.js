// function mat(x) {
//     console.log(x)
//     var y = x.split("\n");
//     console.log(y);
//     y = y.toString();
//     console.log(y);
//     y = y.split(" ");
//     console.log(y);
//     y = y.toString();
//     console.log(y);
//     y = y.split(",")
    
// return y
// }
// console.log(mat('1 2\n3 4'));


// function matrix(x){
//     let y=[];
//     for(let i=0; i<x.length; i++){
//         for(let a = 0; i<x.length;a++){
//             for(let k=0; x[i]=="\n" || i<x.length; k++){
//                 y[a][k]=`${x[i]}`
//             }
//         }
//     }
//     console.log(y)
// }
// matrix(`1 2\n3 4`)



var y=[];
    for(let i=0; i<3;i++){
        y[i]=[];
        for(let j=0;j<3;j++){
            y[i][j]=j+i;
        }
    }


        let n=[];
        // let n=y
        for(let i=0;i<y.length;i++){
          for(let j=i;j<y[i].length;j++){
            n[j][i]=y[i][j];
            // n[i][j]=n[j][i]
            // n[j][i]=aux
        }
        }
        console.log(n)
        console.log(y)
// console.log(y)
// console.log(y)
// for(let i=0; i<3;i++){
//     for(let j=0; j<3;j++){
//         console.log(y[i][j]);
//     }
// }
