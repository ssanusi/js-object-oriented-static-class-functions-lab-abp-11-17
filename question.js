'use strict';
class Question{
  constructor(){

  }
static All(){
  return this._All;
  }
  save(){
    this.constructor._All.push(this)
  }
  static Find(id){
    return this._All[id - 1]
  }
}

Question._All = []
