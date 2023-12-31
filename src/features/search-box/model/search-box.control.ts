import { StringStore } from '~/shared/lib/mobx'
export class SearchBoxModel {
  control = new StringStore('')
  constructor() {}
}
