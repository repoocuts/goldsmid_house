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

				paragraphs[index].classList.add("typing-active");
				paragraphs[index].style.animation = `typing ${typingDuration}s steps(${textLength}, end) forwards`;
				paragraphs[index].classList.add("blinking");

				let stepsCompleted = 0

				paragraphs[index].addEventListener('animationend', (event) => {
					stepsCompleted++
					if (event.animationName === 'typing') {
						paragraphs[index].classList.remove("typing-active");
						paragraphs[index].classList.remove("blinking");
						paragraphs[index].classList.add("typing-done");
						index++;
						setTimeout(typeParagraph, 500); // Delay before typing the next line
					}
				}, { once: true });
			}
		};

		typeParagraph();
	}
}
