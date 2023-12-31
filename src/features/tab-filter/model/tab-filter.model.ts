import { GenericStore } from '~/shared/lib/mobx'

type JobFilter = 'summary' | 'scheduled' | ''

export class TabFilterControl {
  private readonly filter = new GenericStore<JobFilter>('')

  get value() {
    return this.filter.get()
  }

  changeValue(value: JobFilter) {
    this.filter.set(value)
  }
}
