'use strict'
let knygos = {
    grozine: [
        {
            ISBN: 12546321,
            leidimoMetai: 1990,
            pavadinimas: 'Idomi knyga',
            pslSkaicius: 200,
        },
        {
            ISBN: 25478564,
            leidimoMetai: 2000,
            pavadinimas: 'Smagi knyga',
            pslSkaicius: 100,
        },
        {
            ISBN: 45265412,
            leidimoMetai: 2015,
            pavadinimas: 'Faina knyga',
            pslSkaicius: 50,
        },
        {
            ISBN: 36954875,
            leidimoMetai: 2009,
            pavadinimas: 'Baisi knyga',
            pslSkaicius: 70,
        }
    ],
    siaubo: [
        {
            ISBN: 12569874,
            leidimoMetai: 1990,
            pavadinimas: 'Siaubo knyga',
            pslSkaicius: 200,
        },
        {
            ISBN: 11365524,
            leidimoMetai: 2019,
            pavadinimas: 'Smagi siaubo knyga',
            pslSkaicius: 100,
        },
        {
            ISBN: 55669988,
            leidimoMetai: 2015,
            pavadinimas: 'Faina siaubo knyga',
            pslSkaicius: 50,
        },
        {
            ISBN: 11475625,
            leidimoMetai: 2009,
            pavadinimas: 'Baisi siaubo knyga',
            pslSkaicius: 70,
        }
    ],
    trileris: [
        {
            ISBN: 33645874,
            leidimoMetai: 2019,
            pavadinimas: 'Idomus trileris',
            pslSkaicius: 200,
        },
        {
            ISBN: 44785632,
            leidimoMetai: 2000,
            pavadinimas: 'Smagus trileris',
            pslSkaicius: 100,
        },
        {
            ISBN: 99854765,
            leidimoMetai: 2015,
            pavadinimas: 'Fainas trileris',
            pslSkaicius: 50,
        },
        {
            ISBN: 33665544,
            leidimoMetai: 2009,
            pavadinimas: 'Baisus trileris',
            pslSkaicius: 70,
        }
    ],
    nuotykiai: [
        {
            ISBN: 47854512,
            leidimoMetai: 1990,
            pavadinimas: 'Idomus nuotykis',
            pslSkaicius: 200,
        },
        {
            ISBN: 12547896,
            leidimoMetai: 2019,
            pavadinimas: 'Smagus nuotykis',
            pslSkaicius: 100,
        },
        {
            ISBN: 25478963,
            leidimoMetai: 2015,
            pavadinimas: 'Fainas nuotykis',
            pslSkaicius: 50,
        },
        {
            ISBN: 14578563,
            leidimoMetai: 2009,
            pavadinimas: 'Baisus nuotykis',
            pslSkaicius: 70,
        }
    ]

}



for(let kategorija in knygos) {
    console.log(kategorija + " " + knygos[kategorija].length);
    for (let knyga of knygos[kategorija]){
        if (knyga.leidimoMetai == 2019){
            console.log(`${knyga.pavadinimas} ${knyga.leidimoMetai}`)
        }
    } ;
}




