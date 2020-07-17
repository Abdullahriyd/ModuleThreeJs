 //1st method & 3rd is same to find out leap-year.
 //The below Function is for finding all leap-year  from given year to current year

 function leapYear (year) {

    let leapCounter= 0 ;
    let unLeapCounter= 0;
    let totalYear= 0;

    while (year < 2021) {

        let value = year%100 === 0 ? year%400 === 0 : year%4 === 0; 
    
        value==true ? console.log( `${year} is leapyear`) : console.log( `${year} is not leapyear`);
        value==false ? unLeapCounter++ : leapCounter++; 

        totalYear++
        year++;
    
    }

    console.log(`Total leap year = ${leapCounter} \nTotal not leap year = ${unLeapCounter}\nTotal year = ${totalYear}`) ;

}

leapYear(2014);




/* 2nd method 

 function  leapYearTest(year) {
if (year%100 != 0){

    if (  year%4 == 0  )
    { return true;}
    else {
        return false;
    }

}

else if (year%400 == 0 ){
    return true;
}    else {
    return false;
}

};
console.log( leapYearTest(2002) );
    
*/


/*  3rd method 

 function  leapYearTest(year) {
if (year%100 == 0){

    if (  year%400 == 0  )
    { return true;}
    else {
        return false;
    }

}

else if ( year%4 == 0 ){
    return true;
}    else {
    return false;
}

};
console.log( leapYearTest(614) );
    
*/

