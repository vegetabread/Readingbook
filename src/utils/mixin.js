import { mapGetters, mapActions } from 'vuex'

export const ebookMixins = {
  computed: {
    ...mapGetters(['filename',
      'menuvisible',
      'settingvisible',
      'defaultfontsize',
      'currentbook',
      'defaultfontfamily',
      'fontstylepopup'
    ])
  },
  methods: {
    ...mapActions(['asetmenuvisible',
      'asetfilename',
      'setvisible',
      'setdefaultfontsize',
      'setcurrentbook',
      'setdefaultfontfamily',
      'setfontstyle'
    ])
  }
}
