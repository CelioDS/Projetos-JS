class BoxShadowGenerator {

    constructor(
        horizontal,
        horizontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        previewBox,
        rule,
        WebRule,
        MozRule
    ) {
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.WebRule = WebRule;
        this.MozRule = MozRule;
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value
        this.verticalRef.value = this.vertical.value
        this.blurRef.value = this.blur.value
        this.spreadRef.value = this.spread.value

        this.applyRule()
        this.showRule()
    }

    applyRule() {
        this.previewBox.style.boxShadow = ` ${this.horizontalRef.value}px
                                            ${this.verticalRef.value}px
                                            ${this.blurRef.value}px
                                            ${this.spreadRef.value}px
                                            #000000`,
            this.currentRule = this.previewBox.style.boxShadow
    }
    showRule() {
        this.rule.innerText = this.currentRule
        this.WebRule.innerText = this.currentRule
        this.MozRule.innerText = this.currentRule
    }
    updateValue(type, value) {
        switch (type) {
            case 'horizontal':
                this.horizontalRef.value = value
                break
            case 'vertical':
                this.verticalRef.value = value
                break
            case 'spread':
                this.spreadRef.value = value
                break
            case 'blur':
                this.blurRef.value = value
                break
        }
        this.applyRule()
        this.showRule()
    }
}

// seleção Elementos
const horizontal = document.getElementById("horizontal")//alt shift para baixo copia
const horizontalRef = document.getElementById("horizontal-value")
const vertical = document.getElementById("vertical")
const verticalRef = document.getElementById("vertical-value")
const blur = document.getElementById("blur")
const blurRef = document.getElementById("blur-value")
const spread = document.getElementById("spread")
const spreadRef = document.getElementById("spread-value")

const previewBox = document.getElementById("box")

const rule = document.querySelector("#rules span")
const WebRule = document.querySelector("#webkit-rules span")
const MozRule = document.querySelector("#moz-rules span")

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    WebRule,
    MozRule
)

boxShadow.initialize()

// Eventos 

horizontal.addEventListener("input", (e) => {
    const value = e.target.value
    boxShadow.updateValue('horizontal', value)
})

vertical.addEventListener("input", (e) => {
    const value = e.target.value
    boxShadow.updateValue('vertical', value)
})
blur.addEventListener("input", (e) => {
    const value = e.target.value
    boxShadow.updateValue('blur', value)
})
spread.addEventListener("input", (e) => {
    const value = e.target.value
    boxShadow.updateValue('spread', value)
})