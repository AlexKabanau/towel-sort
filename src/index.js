
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // let arr = new Array;
    // for (let i=0; i<matrix.length; i++) {
    //     let  n=2*i+1;
    //     console.log('i=' + i + ', n=' + n);
    //     if (n<matrix.length) {
    //         matrix[n].reverse();
    //         console.log(matrix[n])
    //     }
        
    // };
    // console.log(matrix);
    // for (let i = 0; i<matrix.length; i++) {
    //     matrix[i] = matrix[i].reverse();
    //     // for (let j=0; j<arr.length; j++) {
    //     //     arr.push(matrix[i][j]);
    //     // } 
       
        
    // };

    if (matrix) {
        let arr = new Array;
    let answer = new Array;
    for (let i=0; i<matrix.length; i++) {
        arr = matrix[i];
        if (i%2 == 0) {
            // console.log('i кратно 2', i);
            for (let j=0; j<arr.length; j++) {
                answer.push(arr[j]);
            };
        } else {
            // console.log('i некратно 2', i);
            arr.reverse();
            for (let j=0; j<arr.length; j++) {
                answer.push(arr[j]);
            };
        };
    };
    
    
    
  return answer;
    } else {return []}

    
}
