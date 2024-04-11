export function bizBuz(n){
    let eredmeny = "";
    if(n<=0){
        eredmeny = "nincs ilyen sorozat"
    } else {
        for (let index = 1; index <= n; index++) {
            if(index === n){
                eredmeny += seged(index);
            } else {
                eredmeny += seged(index)+",";
            }   
                
        }
    }
 /* ha n%2===0 akkor füzzük hozzá az eredményhez a BIZ*/
 /*kell egy ciklus*/
    return eredmeny;
}

export function seged(n){
    /* n, BIZ, BUZ, BIZZBUZ*/
    let eredmeny = "";
    if((n% 2 === 0) && (n % 3 === 0)){
        eredmeny = "1";
    } else if (n%3 === 0){
        eredmeny = "BIZ";
    } else if (n%2 === 0){
        eredmeny = "BUZ";
    } else {
        eredmeny = n;
    }
    return eredmeny;
}