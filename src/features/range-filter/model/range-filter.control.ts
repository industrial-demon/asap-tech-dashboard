import { action, makeObservable, observable } from 'mobx'

type Value = Array<number>

export class RangeFilterControl {
  value: Value = [0]

  constructor() {
    makeObservable(this, {
      value: observable,
      changeValue: action.bound,
    })
  }

  changeValue(value: Value) {
    this.value = value
  }
}
