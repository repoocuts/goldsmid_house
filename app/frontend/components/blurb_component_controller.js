import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	static targets = ["paragraph"];

	connect() {
		console.log('Blurb controller connected', this.element);
		this.startTypingEffect();
	}

	startTypingEffect() {
		let index = 0;
		const paragraphs = this.paragraphTargets;

		const typeParagraph = () => {
			if (index < paragraphs.length) {
				paragraphs[index].classList.add("typing-active");
				paragraphs[index].addEventListener('animationend', () => {
					paragraphs[index].classList.remove("typing-active");
					paragraphs[index].classList.add("typing-done");
					index++;
					setTimeout(typeParagraph, 500);  // Delay before typing the next line
				});
			}
		};

		typeParagraph();
	}
}
