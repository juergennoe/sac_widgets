(function()  {
	let template = document.createElement("template");
	let form = createElement("form");
	let fieldset = createElement("fieldset");
	let legend = createElement("legend");
	legend.content = "JNC Box Builder";
	fieldset.appendChild("legend");
    let table = createElement("table");
	let tablerow = createElemet("tr");
	let tablecol1 = createElment("td");
	tablecol1 = "Opacity";
    tablerow.appendChild(tablecol1);
	let tablecol2 = createElment("td");
	let input1 = createElement("input");
	input1.id="builder_opacity";
	input1.type="text";
	input1.size="5";
	input1.maxlength="5";
	tablecol2.appendChild(input1);
	tablerow.appendChild(tablecol2);
	table.appendChild(tablerow);
	fieldset.appendChild(table);
	let input2 = createElement("input");
	input2.type ="submit";
	input2.style = "display:none;"
	fieldset.appendChild(input2);
	form.appendChild(fieldset);

	class JNCBoxBuilderPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							opacity: this.opacity
						}
					}
			}));
		}

		set opacity(newOpacity) {
			this._shadowRoot.getElementById("builder_opacity").value = newOpacity;
		}

		get opacity() {
			return this._shadowRoot.getElementById("builder_opacity").value;
		}
	}

	customElements.define("de-jnc-sample-jnc_box_builder", JNCBoxBuilderPanel);
})();