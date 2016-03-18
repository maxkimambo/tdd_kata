
function fizzbuzz(){

};

function Exception(message){
    this.message = message;
    this.name = 'Exception type'
}


fizzbuzz.prototype.process = function(input){

    var processedInput = '';
    if(input > 100){
        throw new RangeError('input out of bounds');
    }

    if(input %3 ===0){
        processedInput += 'fizz';
    }

    if (input %5 ===0){
        processedInput += 'buzz'
    }

    if(!processedInput){
        processedInput = input;
    }

    return processedInput;
};

fizzbuzz.prototype.start = function(){
   var range = 100;
    while (range--){
        console.log(this.process(range));
    }

};

module.exports =   fizzbuzz;