import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      'dark': '#373A40',
      'main': '#E58752',
      'second': '#6B33B5',
      'content': '#f3f3f3'
    },
    container: {
      center: true,
      margin: {
        'DEFAULT': '0 auto'
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
})