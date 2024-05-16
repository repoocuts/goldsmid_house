import { Controller } from "@hotwired/stimulus"

export default class HelloController extends Controller {
  connect() {
    console.log('hellooooo controller connected');
    this.element.addEventListener('mouseenter', this.showContent.bind(this));
    this.element.addEventListener('mouseleave', this.hideContent.bind(this));
  }

  showContent() {
    this.element.classList.add('hovered');
  }

  hideContent() {
    this.element.classList.remove('hovered');
  }
}
