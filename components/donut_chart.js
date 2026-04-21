class DonutChart extends HTMLElement {
    connectedCallback() {
        const value = this.getAttribute("value") || 0;
        const title = this.getAttribute("title") || "None";
        const chartColor = this.getAttribute("chart-color") || "white";

        this.innerHTML = `
        <div class="donut-card">
            <div class="donut-percentage" style="--clr:${chartColor}; --num: ${value}">
            <div class="dot-indicator"></div>
                <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
                </svg>
            <div class="donut-value">
                <h2>${value}<span>%</span></h2>
                <p>${title}</p>
            </div>
            </div>
        </div>
        `;
    }
}

customElements.define("donut-chart", DonutChart)