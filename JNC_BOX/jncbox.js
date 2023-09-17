(function() { 
	let template = document.createElement("template");
	let img = document.createElement("img");
	template.appendChild(img);
	img.setAttribute("src", "Wasserturm.jpg");
	img.setAttribute("width", "250");
	img.setAttribute("height", "500");
	img.setAttribute("alt", "Wasserturm");

	class JNCBox extends HTMLElement {
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

	customElements.define("de-jnc-sample-jncbox", JNCBox);
})();