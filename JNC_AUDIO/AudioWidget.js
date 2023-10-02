(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
          <div class="audio-container"> <audio controls> <source src="https://juergennoe.github.io/sac_widgets/JNC_AUDIO/jnc-sample.m4a" type="audio/mpeg">  </audio></div>   
        <div id="audio_welcome"></div>               
    `;

    class JNC_AudioWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._props = {};
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

onCustomWidgetAfterUpdate(changedProperties) {
}
}

    customElements.define('jnc-audio-widget', JNC_AudioWidget);
})();
