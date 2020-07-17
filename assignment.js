// Feet to Mile conversion function.....

function feetToMile (num) {
    let ft = +num;

    if ( isNaN (ft) )  {
        return -1 ;   
    }
    else if ( ft< 0){
        return -2 ;
    }
    else {
        const mile = ft * 0.000189394 ;
        return mile.toFixed(8) ;
    }   
}

let resultFeet = feetToMile (" 40 ") ;

if ( resultFeet == -1 ){
    console.log ("\nFeet to Mile conversion :\nWrong Input !! Please Enter Only Number.");
}else if (resultFeet == -2 ){
    console.log ("\nFeet to Mile conversion :\nNegative Input !! Plese Enter Positive Value.");    
}
else {
    console.log ("\nFeet To Mile Conversion :\nThe Result = "+ resultFeet +" Mile." ) ;
}


// Wood Calculator Fanction

function woodCalculator(chair, table, bed) {

    let Chair = +chair ;
    let Table = +table ;
    let Bed =  +bed ;


    if ( isNaN(Chair) || isNaN(Table) || isNaN(Bed) )  {
        return -1 ;   
    }
    else if ( Chair< 0 || Table<0 || Bed<0 ){
        return -2 ;
    }    
    else if ( Chair== 0 || Table==0 || Bed==0 ){
        return -3 ;
    }
    else {
        const totalWood = Chair*1 + Table*3 + Bed*5 ;
        return totalWood.toFixed(2) ;
    }

}

let resultWood = woodCalculator( " 8 ", " 5 ", " 8 ");


if ( resultWood == -1 ){
    console.log ("\nWood Calculator :\nWrong Input !! Please Enter Only Number.");
}else if (resultWood == -2 ){
    console.log ("\nWood Calculator :\nNegative Input !! Plese Enter Positive Value.");    
}else if (resultWood == -3 ){
    console.log ("\nWood Calculator :\n!! Plese Enter All Values.\n");    
}
else {
    console.log ("\nWood Calculator :\nTotal Wood Required = "+ resultWood +" ft3." ) ;
}


// Brick Calculator Function

function brickCalculator(num) {
    let floor = +num;

    if ( isNaN (floor) )  {
        return -1 ;   
    }
    else if ( floor< 0){
        return -2 ;
    }
    else {

        let brick1 =0 ;
        let brick2 =0 ;
        let brick3 =0 ;
        let extraValue =0 ;
        let stopper = 0;

        if(floor >20){
            extraValue = floor - 20 ;
            stopper= 20;
        }else{
            stopper = floor ;
        }

        brick3 = extraValue*10*1000;

        for(let i=1; i<=stopper ; i++){

        if ( i <=10){
            let height = i*15*1000 ;
            brick1 = height ;
        }

        else{
            let j=1 ;
            let height = j*12*1000 ;
            brick2 =brick2 + height ;
        }        
        
    }
      return brick1+brick2+brick3 ;  
    }   
}

let resultFloor = brickCalculator (" 60 ") ;

if ( resultFloor == -1 ){
    console.log ("\nBrick Calculator :\nWrong Input !! Please Enter Only Number.");
}
else if (resultFloor == -2 ){
    console.log ("\nBrick Calculator :\nNegative Input !! Plese Enter Positive Value.");    
}
else {
    console.log ("\nBrick Calculator :\nTotal Brick Required = "+ resultFloor +"." ) ;
}


// Tiny Frind Function

function tinyFriend( name ){

    let filtered = name.filter(function (el) {
        return el != null &&  el !=='' ;
      });

    let minName =[] ;
    
    // working each array element start

    for (i=0; i<filtered.length; i++){

        let oneString = '';
        let count = 0;

        let element = filtered[i] ;
        oneString= element ;

        //filtering blank space of each name start

        for (let i=0; i<oneString.length; i++){
            let element = oneString[i] ;
            if( element != ' '){
                count++;  
            }   
        }
        //filtering blank space of each name end

        let nameLength = count ;
        minName.push(nameLength) ;
               
    }
    
    // working each array element end

    let min = minName.reduce(function(a, b) {
        return Math.min(a, b);
    }) ;

    let position= minName.indexOf(min);
    let result = filtered[position];

    return result; 
}

let resultFriend = tinyFriend( ['riyad', 'asmot ullah  ', 'Hemale', 'shimul ','suvo', 'lin ', 'hasan', 'turjo   ', 'bulbul', ,,,,,'Abul'] )

console.log ('\nTiny Frind:\n'+ resultFriend +'\n');