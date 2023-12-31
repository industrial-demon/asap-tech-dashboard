'use client'
import { SearchBoxModel } from '~/features/search-box/model/search-box.control'
import { StringStore } from '~/shared/lib/mobx'


export class ManagePageStore {
  searchBoxControl = new SearchBoxModel()
  
}
