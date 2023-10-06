function arrSort(arrNoSort){
    for(let i=0;i<arrNoSort.length;i++){
        for(let j=0;j<arrNoSort.length-1;j++){
            if (arrNoSort[j]>arrNoSort[j+1]){
                let temp=arrNoSort[j];
                arrNoSort[j]=arrNoSort[j+1];
                arrNoSort[j+1]=temp;
            }
        }
    }
    return arrNoSort;
}
console.log(arrSort([12,33,3,44,100]));