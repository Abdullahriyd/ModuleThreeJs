
// First process is recursive way to solve 

function fibonaschi (n) {
    
    if (n == 0) {
        return 0;
    }
    if ( n == 1) {
        return 1;
    }
    else {
        return fibonaschi(n-1) + fibonaschi (n-2);
    }

}

console.log ('Fibonacci Recursive Way '+ fibonaschi (5));

// Second way to solve

function fibo2(n) {
    
    let fib = [ 0, 1];

    for ( i=fib.length ; i<=n ; i++){

        fib[i] = fib[i-1] + fib[i-2] ;
    }

    return  fib;
    
}

console.log('Fibonacci Normal Way '+ fibo2(5) );

// Recursive solution for factorial

function factorial(n) {

    if( n==0 ) {
        return 1;
    }else {
        return n* factorial(n-1);
    }
    
}

console.log ('Factorial recursive Way '+ factorial (4) )

// normal way for factorial

function factor(n) {
    let count=1;

    for(i=1 ; i<=n ; i++) {

        count= count*i ;

    }
    return count;
}

console.log ('Factorial Normal Way '+ factor(6));

// prime number

function isPrimeNumber(n) {

    for ( i=2 ; i<n ; i++) {

        if (n % i == 0 ) {
            return 'is not a prime number' ;
        }

    }
    return 'is a prime number';
      
}

console.log ( isPrimeNumber (627));



