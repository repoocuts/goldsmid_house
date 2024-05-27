import { Controller } from "@hotwired/stimulus"

export default class HelloController extends Controller {
  connect() {
    console.log('hello controller connected', this.element);
  }
}
