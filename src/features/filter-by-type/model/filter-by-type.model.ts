import { action, computed, makeObservable, observable } from 'mobx'
import { BooleanStore } from '~/shared/lib/mobx'

interface FilterType {
  value: string
  title: string
  name: string
  checkboxControl: BooleanStore
  isActive?: boolean
}

export const createFilterControl = (
  filterParams: Omit<FilterType, 'checkboxControl'>,
): FilterType => ({
  value: filterParams.value,
  name: filterParams.name,
  title: filterParams.title,
  checkboxControl: new BooleanStore(filterParams.isActive ? true : false),
})

export class FilterByTypeControl<T> {
  defaultValue: T | string = ''
  controlsList: Array<FilterType>

  constructor(controlList: Array<FilterType>) {
    makeObservable(this, {
      controlsList: observable,
      allOn: action,
      addControl: action,
      allOff: action,
      isAllOn: computed,
      filtersTypes: computed,
      selectedTypes: computed,
    })
    this.controlsList = controlList
  }

  addControl(control: FilterType) {
    if (!this.controlsList.includes(control)) {
      this.controlsList.push(control)
    }
  }

  allOn() {
    this.controlsList.forEach(control => {
      control.value === this.defaultValue
        ? control.checkboxControl.on()
        : control.checkboxControl.off()
    })
  }

  allOff() {
    this.controlsList
      .find(control => control.value === this.defaultValue)
      ?.checkboxControl.off()
  }

  get isAllOn() {
    return this.controlsList.some(
      control =>
        control.value === this.defaultValue && control.checkboxControl.isTrue,
    )
  }

  get filtersTypes() {
    return this.controlsList.reduce(
      (acc, control) => ({
        ...acc,
        [control.name]: control.checkboxControl.isTrue,
      }),
      {},
    )
  }

  get selectedTypes() {
    return this.controlsList.reduce<Array<T>>(
      (acc, control) =>
        control.checkboxControl.isTrue && control.value !== this.defaultValue
          ? [...acc, control.value as T]
          : acc,
      [],
    )
  }
}
