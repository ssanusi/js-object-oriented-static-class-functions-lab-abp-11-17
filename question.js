'use strict';
class Question{
  constructor(){
    
  }

  Question._All =[]
  static All{
    return this._All;
  }
  save(){
    this.constructor._All.push(this)
  }
  static Find(id){
    return this.constructor._all[id - 1]
  }
}