import { observable, action } from 'mobx'
import { http } from './../http'
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PARAM_PAGE,
  PARAM_HPP,
  url
} from '../utils'

const page = 1
const categoriesUrl = url + DEFAULT_QUERY + '&' + PARAM_PAGE + page + '&' + PARAM_HPP + DEFAULT_HPP

class Home {
  @observable categories = []
  @observable data = {}
  
  @action async getCategories () {
    const response = await http.get(categoriesUrl)
    if (response) {
      self.categories = response.hits
      self.data  = response
    }
  }
}
const self = new Home()
export default self