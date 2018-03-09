class SmartCalculator extends Number {
    constructor(initialValue,lastOp,lastOperation) {
        super(initialValue);
        // your implementation
        this.value=initialValue;
        this.lastOperationNumber=lastOp||0;
        this.lastOperation=lastOperation||'';
    }
    add(number) {
        return new SmartCalculator(this.value+number,number,'+');
        // your implementation
    }

    subtract(number) {
        return new SmartCalculator(this.value-number,number,'-');
        // your implementation
    }

  multiply(number) {
    // your implementation
          if(this.lastOperation===''||this.lastOperation==='^'){
              return new SmartCalculator(this.value*number,0,'');
          }else if(this.lastOperation==='+'){
              return new SmartCalculator(this.value+this.lastOperationNumber*(number-1)
                  ,this.lastOperationNumber*number,'+');
          }else if(this.lastOperation==='-'){
              return new SmartCalculator(this.value-this.lastOperationNumber*(number-1)
                  ,this.lastOperationNumber*number,'-');
          }
  }

  devide(number) {
    // your implementation
      if(this.lastOperation===''||this.lastOperation==='^'){
          return new SmartCalculator(Math.floor(this.value/number),0,'');
      }else if(this.lastOperation==='+'){
          return new SmartCalculator(this.value+Math.floor(this.lastOperationNumber/number)-this.lastOperationNumber
              ,Math.floor(this.lastOperationNumber/number),'+');
      }else if(this.lastOperation==='-'){
          return new SmartCalculator(this.value-Math.floor(this.lastOperationNumber/number)+this.lastOperationNumber
              ,Math.floor(this.lastOperationNumber/number),'-');
      }
  }

  pow(number) {
    // your implementation
      if(this.lastOperation===''){
          return new SmartCalculator(Math.pow(this.value,number),number,'^');
      }else if(this.lastOperation==='+'){
          return new SmartCalculator(this.value+Math.pow(this.lastOperationNumber,number)-this.lastOperationNumber
              ,Math.pow(this.lastOperationNumber,number),'+');
      }else if(this.lastOperation==='-'){
          return new SmartCalculator(this.value-Math.pow(this.lastOperationNumber,number)+this.lastOperationNumber
              ,Math.pow(this.lastOperationNumber,number),'-');
      }else if(this.lastOperation==='^'){
          return new SmartCalculator(Math.pow(Math.pow(this.value,Math.floor(1/this.lastOperationNumber)),Math.pow(this.lastOperationNumber,number))
              ,Math.pow(this.lastOperationNumber,number),'^');
      }
  }
}

module.exports = SmartCalculator;
