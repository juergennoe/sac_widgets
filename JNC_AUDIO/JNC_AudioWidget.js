(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <audio controls>
    <source src="/jnc-sample.m4a" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>    `;

    class JNC_AudioWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._props = {};

            // Load D3.js
            const script = document.createElement('script');
            script.src = 'https://d3js.org/d3.v5.min.js';
            script.onload = () => this._ready = true;
            this._shadowRoot.appendChild(script);
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }
    
}
    customElements.define('jnc-audio-widget', JNC_AudioWidget);
})();
