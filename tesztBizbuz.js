import { bizBuz  } from "./bizbuz.js";
import { seged  } from "./bizbuz.js";

export function tesztBizBuz(){
    /* 1.*/
    const TESZT_LISTA = [
        {
            n:0,
            vart: "nincs ilyen sorozat"
        },
        {
            n: -1,
            vart: "nincs ilyen sorozat"
        },
        {
            n:1,
            vart: "1"
        },
        {
            n:2,
            vart: "1, BIZ"
        },
        {
            n:3,
            vart: "1, BIZ, BUZ"
        },
        {
            n:10,
            vart: "1, BIZ, BUZ, BIZ, 5, BIZBUZ, 7, BIZ, BUZ, BIZ"
        }
    ];
    TESZT_LISTA.forEach((tesztEset,index) =>{
        let fvEredmeny = bizBuz(tesztEset.n)
        console.assert(
            tesztEset.vart === fvEredmeny,
            "%o",
            `n: ${tesztEset.n} vart:${tesztEset.vart} kapott: ${fvEredmeny}`,
            `HIBA! a ${index}. teszesetnél`

        );
    });
}
 
export function tesztSeged(n){
    const TESZT_LISTA = [
        {
            n:0,
            vart: "nincs ilyen sorozat"
        },
        {
            n: -1,
            vart: "nincs ilyen sorozat"
        },
        {
            n:1,
            vart: "1"
        },
        {
            n:2,
            vart: "1, BIZ"
        },
        {
            n:3,
            vart: "1, BIZ, BUZ"
        },
        {
            n:6,
            vart: "BIZBUZ"
        }
    ];
    TESZT_LISTA.forEach((tesztEset,index) =>{
        let fvEredmeny = seged(tesztEset.n)
        console.assert(
            tesztEset.vart === fvEredmeny,
            "%o",
            `n: ${tesztEset.n} vart:${tesztEset.vart} kapott: ${fvEredmeny}`,
            `HIBA! a ${index}. teszesetnél`

        );
    });
}