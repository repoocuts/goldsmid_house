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
				const typingDuration = textLength * 0.02;
				const blinkingDuration = textLength / 2;
				paragraphs[index].style.animation = `typing ${typingDuration}s steps(${textLength}, end) forwards, blinking ${blinkingDuration}s step-end infinite`;
				paragraphs[index].classList.add("typing-active");
				paragraphs[index].addEventListener('animationend', () => {
					paragraphs[index].classList.remove("typing-active");
					paragraphs[index].classList.add("typing-done");
					index++;
					setTimeout(typeParagraph, 500);
				}, { once: true });
			}
		};

		typeParagraph();
	}
}
