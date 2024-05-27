import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('projects component controller connected', this.element);
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
