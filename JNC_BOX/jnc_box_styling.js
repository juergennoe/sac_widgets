(function()  {
	let template = document.createElement("template");
	let form = createElement("form");
	let fieldset = createElement("fieldset");
	let legend = createElement("legend");
	legend = "JNC Box Styling";
	fieldset.appendChild("legend");
    let table = createElement("table");
	let tablerow = createElemet("tr");
	let tablecol1 = createElment("td");
	tablecol1 = "Color";
    tablerow.appendChild(tablecol1);
	let tablecol2 = createElment("td");
	let input1 = createElement("input");
	input1.id="styling_color";
	input1.type="text";
	input1.size="40";
	input1.maxlength="40";
	tablecol2.appendChild(input1);
	tablerow.appendChild(tablecol2);
	table.appendChild(tablerow);
	fieldset.appendChild(table);
	let input2 = createElement("input");
	input2.type ="submit";
	input2.style = "display:none;"
	fieldset.appendChild(input2);
	form.appendChild(fieldset);

	class JNCBoxStylingPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", 
            {
					detail: {
						properties: {
							color: this.color
            						}
					}
			},
            ));
		}

		set color(newColor) {
			this._shadowRoot.getElementById("styling_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("styling_color").value;
		}
	}
customElements.define("de-jnc-sample-jnc_box_styling", JNCBoxStylingPanel);
})();
