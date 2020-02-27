<template>
  <svg
    :class="className"
    v-bind="attributes"
    v-html="svgInner"
  />
</template>

<script>
import { parse } from 'svg-parser'

export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  data: () => ({
    svgString: '',
    attributes: {},
    svgInner: ''
  }),
  computed: {
    filepath () {
      return require(`@/assets/icons/${this.iconName}.svg`)
    }
  },
  created () {
    this.loadFile()
  },
  methods: {
    loadFile () {
      fetch(this.filepath)
        .then(response => response.text())
        .then(svg => {
          this.svgString = svg
          this.getSvgAttrs()
          this.getSvgInner()
        })
    },
    getSvgAttrs () {
      let parsedSvg = parse(this.svgString)

      let parsedSvgProps = parsedSvg.children[0].properties;
      for (let key in parsedSvgProps) {
        this.attributes[key] = parsedSvgProps[key]
      }
    },
    getSvgInner () {
      let startIndex
      let endIndex
      startIndex = this.svgString.indexOf('>')
      endIndex = this.svgString.indexOf('</svg')
      this.svgInner = this.svgString.slice(startIndex + 1, endIndex)
    }
  }
}
</script>
