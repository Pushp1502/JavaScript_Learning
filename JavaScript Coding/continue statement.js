let n= 10;

for(let i=1; i<=n; i++){//outer loop

    for( let j=1; j<=n; j++) {//inner loop
    
    if(j == 6) {
     
        continue; 
     }
    
     console.log(i,j);

     
    }
}
