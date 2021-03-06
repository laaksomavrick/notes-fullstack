/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import { last } from 'underscore';

Vue.use(TurbolinksAdapter)

const files = require.context('../components', true, /\.vue$/i)

files.keys().map(key => {
    return Vue.component(last(key.split('/')).split('.')[0], files(key).default)
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#app'
  })
})
