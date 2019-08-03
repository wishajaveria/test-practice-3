// 
// for(i = 1 ; i <= 10; i++){
// console.log(i);

// }


// let n = 1;
// let v = 2;
// for (n = 1; n <= 10; n++) {
//     answer = n * v;
//     console.log(v + " * " + n + " = " + answer);

// }

// let numb1 = 1;
// let  value1= 2;
// for (numb1 = 1; numb1 <= 10; numb1++) {
//     answer = numb1 *  value1;
//     console.log( value1 + " * " + numb1 + " = " + answer + "\n" );
// }


// let  numb2 = 1;
// let value2 = 3;
// for ( numb2 = 1;  numb2 <= 10;  numb2++) {
//     answer =  numb2 * value2;
//     console.log(value2 + " * " +  numb2 + " = " + answer + "\n");

// }
// let  numb3 = 1;
// let value3 = 4;
// for ( numb3 = 1;  numb3 <= 10;  numb3++) {
//     answer =  numb3 * value3;
//     console.log(value3 + " * " +  numb3 + " = " + answer + "\n");

// }
// let  numb4 = 1;
// let value4 = 5;
// for ( numb4 = 1;  numb4 <= 10;  numb4++) {
//     answer =  numb4 * value4;
//     console.log(value4 + " * " +  numb4 + " = " + answer + "\n");

// }
// let  numb5 = 1;
// let value5 = 6;
// for ( numb5 = 1;  numb5 <= 10;  numb5++) {
//     answer =  numb5 * value5;
//     console.log(value5 + " * " +  numb5 + " = " + answer + "\n");

// }
// let  numb6 = 1;
// let value6 = 7;
// for ( numb6 = 1;  numb6 <= 10;  numb6++) {
//     answer =  numb6 * value6;
//     console.log(value6 + " * " +  numb6 + " = " + answer + "\n");

// }
// let  numb7 = 1;
// let value7 = 8;
// for ( numb7 = 1;  numb7 <= 10;  numb7++) {
//     answer =  numb7 * value7;
//     console.log(value7 + " * " +  numb7 + " = " + answer + "\n");

// }
// let  numb8 = 1;
// let value8 = 9;
// for ( numb8 = 1;  numb8 <= 10;  numb8++) {
//     answer =  numb8 * value8;
//     console.log(value8 + " * " +  numb8 + " = " + answer + "\n");

// }
// let  numb9 = 1;
// let value9 = 10;
// for ( numb9 = 1;  numb9 <= 10;  numb9++) {
//     answer =  numb9 * value9;
//     console.log(value9 + " * " +  numb9 + " = " + answer + "\n");

// }

// let students = [
//     {
//         name: "Amna",
//         hobbies: ["eating", "cooking"]
//     },
//     {
//         name: "Daniyal",
//         hobbies: ["arts", "shopping"]
//     },
//     {
//         name: "Fahad",
//         hobbies: ["coding", "cooking"]
//     },
//     {
//         name: "Hajra",
//         hobbies: ["sleep", "reading"]
//     }
// ];
// for (i = 0; i < students.length;  i++){
//     if(students[i].name == "Amna"){
//         console.log( "hobbies of" + students[0].name + "\n" +  students[0].hobbies[0] + "\n" +  students[0].hobbies[1] );

//     }

//     if(students[i].name == "Daniyal"){
//         console.log( "hobbies of" + students[1].name + "\n" +  students[1].hobbies[0] + "\n" +  students[1].hobbies[1] );

//     }

//     if(students[i].name == "Fahad"){
//         console.log( "hobbies of" + students[2].name + "\n" +  students[2].hobbies[0] + "\n" +  students[2].hobbies[1] );

//     }

//     if(students[i].name == "Hajra"){
//         console.log( "hobbies of" + students[3].name + "\n" +  students[3].hobbies[0] + "\n" +  1+students[3].hobbies[1] );

//     }


// }
// function check(n){
// for(let i = 0; i <= n; i++){
//     let value = 1;
//     for(let j = 1; j <= n - value; j++){
//         process.stdout.write(' ');
//     }

//     for(let j = 1; j <= value; j++){
//         process.stdout.write('#');
//     }
//     process.stdout.write('\n');
// }
// }


// function StairCase(n) {
//     for (var i = 1; i <= n; i++) {
//         var col = i;
//         for(var j = 1; j <= n - col; j++) {
//             process.stdout.write(' ');
//         }
//         for(var j = 1; j <= col; j++) {
//             process.stdout.write('#');
//         }
//         process.stdout.write('\n');
//     }

// function StairCase(n) {
//     var s = '';
//     for (let i = 1; i <= n; i++) {
//             s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
//     }
//     return s;
// }

// function stairCase(){
//     let n = 9;
//     let space, hash;
//     for(let i = 0; i <= n; i++){

//         space = 
//     }
// }
/*
function stairSeries() {
    let n = 6;


    for (let i = 1; i < n; i++) {

        hash =
            equal = i;
        stair = ' '.repeat() + '#'.repeat();
        console.log(stair);
    }
}
function stairCase() {

     let hash, equal, stair, num;

     for (let i = 1; i <= n; i++) {
         space = n;
         hash = "";
         equal = i;
         stair = ' '.repeat(space) + "#".repeat(hash) + '1', '2', '3', '4', '5', '6';
         console.log(stair);
     }
 }
 stairCase();

*/




function stairSeries() {
    let n = 6;
    let   hash;

    for (let i = 1; i < n; i++) {
        //space = n - 1 - i;
        hash = i + 1;
        
         //' '.repeat(space) + '#'.repeat(hash) ;
        console.log( '#'.repeat(hash) );
    }
}

stairSeries();
