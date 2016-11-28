module.exports = {
/**
 * @func  isPrime
 * returns true for a number that is prime, otherwise returns false
 * @param {Number} n
 * @returns {Boolean} true or false
 **/

 isPrime: function(n){
     for(var i = 2; i < n; i++){
         if(n % i === 0){
             return false ;
         }  
     }
      return true;
 },

 /**
 * @func  getPrimes 
 * returns prime numbers from 0 to n with asymptotic analysis
 * @param {Number} n
 * @returns {Array}
 **/

getPrimes: function(n){
    var arrOfPrimes = [];
    if(typeof (n) !== 'number' || (n) < 2)
        return 'Invalid input';
    for(var j = 2; j <= n; j++){
        if(this.isPrime(j)){
            arrOfPrimes.push(j);
        }
    }
    return arrOfPrimes;
}
}
 