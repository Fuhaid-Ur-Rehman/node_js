// /*
// if n=3;
// ****
// ****
// ****
// */
// function Patteren(n){
// Number(n);
// for(i=0;i<n;i++){
//     let pattern='';
//     for(j=0;j<=n;j++){
//         pattern+='*';
//     }
//     console.log(pattern);
// }
// }
// Patteren(5);
// /*
// if n=3;
// *
// **
// ***
// */
// function Patteren(n){
//     Number(n);
//     for(i=0;i<n;i++){
//         let pattern='';
//         for(j=0;j<=i;j++){
//             pattern+='*';
//         }
//         console.log(pattern);
//     }
//     }
//     Patteren(5);
//________________________________________________________________
/*
if n=5;
1
12
123
1234
12345
*/
// function Patteren(n){
//     Number(n);
//     for(i=1;i<=n;i++){
//         let pattern='';
//         for(j=1;j<=i;j++){
//             pattern+=j;
//         }
//         console.log(pattern);
//     }
//     }
//     Patteren(5);
    //_______________________________________
/*
if n=5;
1
22
333
4444
55555
*/
function Patteren(n){
    Number(n);
    for(i=1;i<=n;i++){
        let pattern='';
        for(j=1;j<=i;j++){
            pattern+=i;
        }
        console.log(pattern);
    }
    }
    Patteren(5);