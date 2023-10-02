(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
          <div class="audio-container"> <audio controls> <source src="https://github.com/juergennoe/sac_widgets/blob/main/JNC_AUDIO/jnc-sample.m4a" type="audio/mpeg">  </audio></div>   
        <div id="audio_welcome"></div>               
               </div>
        </div>
    `;

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

onCustomWidgetAfterUpdate(changedProperties) {
}
}

    customElements.define('jnc-audio-widget', JNC_AudioWidget);
})();
