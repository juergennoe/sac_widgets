(function() { 
	let template = document.createElement("template");
	let img = document.createElement("audio");
	template.appendChild(img);
	img.setAttribute("src", "jnc-sample.m4a");
	img.setAttribute("type", "audio/mpeg");
	img.setAttribute("alt", "Audio Comment");

	class JNC_AudioWidget extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			if ("opacity" in changedProperties) {
				this.style["opacity"] = changedProperties["opacity"];
			}
		}
	}

	customElements.define("de-jnc-sample-jncaudio", JNC_AudioWidget);
})();