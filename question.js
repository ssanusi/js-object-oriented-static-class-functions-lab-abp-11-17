'use strict';
class Question{
  constructor(){
    this.save()

  }
static All(){
  return this._All;
  }
  save(){
    this.constructor._All.push(this)
  }
  static Find(id){
    return _All[id - 1]
  }
}

Question._All = []
