import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	static targets = ["paragraph"];

	connect() {
		console.log('Blurb controller connected');
		this.startTypingEffect();
	}

	startTypingEffect() {
		let index = 0;
		const paragraphs = this.paragraphTargets;

		const typeParagraph = () => {
			if (index < paragraphs.length) {
				const textLength = paragraphs[index].textContent.length;
				const typingDuration = 3;

				paragraphs[index].classList.add("typing-active");
				paragraphs[index].style.animation = `typing ${typingDuration}s steps(${textLength}, end) forwards`;

				paragraphs[index].addEventListener('animationend', (event) => {
					if (event.animationName === 'typing') {
						paragraphs[index].classList.remove("typing-active");
						paragraphs[index].classList.add("typing-done");
						index++;
						setTimeout(typeParagraph, 500);
					}
				}, { once: true });
			}
		};

		typeParagraph();
	}
}
