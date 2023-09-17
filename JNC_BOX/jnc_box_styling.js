(function()  {
	let template = document.createElement("template");
    let para1 = document.createElement("p");
    para1.innerText = "Mein Stylingpanel";
    template.appendChild(para1);
	let form = document.createElement("form");
    template.appendChild(form);
	let fieldset = document.createElement("fieldset");
    template.appendChild(fieldset);
	let legend = document.createElement("legend");
	legend.innerText = "JNC Box Styling";
	template.appendChild(legend);
    let table = document.createElement("table");
	template.appendChild(table);
	let tablerow = document.createElement("tr");
    template.appendChild(tablerow);
	let tablecol1 = document.createElement("td");
	tablecol1.innerText = "Farbe";
    template.appendChild(tablecol1);
	let tablecol2 = document.createElement("td");
    template.appendChild(tablecol2);
	let input1 = document.createElement("input");
	input1.setAttribute ("id","styling_color");
	input1.setAttribute ("type", "text");
	input1.setAttribute("size", "40");
	input1.setAttribute( "maxLength","40");
	template.appendChild(input1);
	let input2 = createElement("input");
	input2.setAttribute( "type", "submit");
	input2.setAttribute ("style", "display:none");
	template.appendChild(input2);

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
