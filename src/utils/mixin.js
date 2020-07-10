import { mapGetters, mapActions } from 'vuex'

export const ebookMixins = {
  computed: {
    ...mapGetters(['filename', 'menuvisible'])
  },
  methods: {
    ...mapActions(['asetmenuvisible', 'asetfilename'])
  }
}
