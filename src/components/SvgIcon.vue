<!-- Компонент стилизуемой SVG-иконки -->

<template v-html="svgString" :class="className">
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    // Имя файла (без расширения)
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  data: () => ({
    // Строка с содержимым SVG-файла
    svgString: ''
  }),
  computed: {
    // Путь расположения SVG-файла
    filepath () {
      return require(`@/assets/icons/${this.iconName}.svg`)
    }
  },
  watch: {
    // При изменении файла, перезагружаем его
    filepath: {
      immediate: true,
      handler: 'loadFile'
    }
  },
  // Загрузка содержимого SVG файла
  created () {
    this.loadFile()
  },
  methods: {
    loadFile () {
      fetch(this.filepath)
        .then(response => response.text())
        .then(svg => (this.svgString = svg))
    }
  }
}
</script>
