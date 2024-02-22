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
  shortcuts: {
    'link': 'relative inline-flex items-center text-main ' +
      'focus:(shadow-[0_0_0_1px_#fc635b] text-[#fc635b] outline-none) ' +
      'hover:(shadow-[0_0_0_1px_#fc635b] text-[#fc635b]) ' +
      'transition-colors transition-shadow',
  },
  theme: {
    colors: {
      'dark': '#373A40',
      'main': '#E58752',
      'second': '#6B33B5',
      'second-light': '#CAA2FF',
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