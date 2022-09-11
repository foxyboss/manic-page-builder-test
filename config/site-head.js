export default {
    titleTemplate: '%s - Page Builder Test with Manic',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'foxyboss' },
      { hid: 'description', name: 'description', content: 'foxyboss page built with Manic' },
      { name: 'format-detection', content: 'telephone=no' },
      /**
       * Open Graph Twitter Card
       */
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@foxyboss'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://foxyboss.github.io/manic-page-builder-test'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'foxyboss page built with Manic'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'foxyboss page built with Manic'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://foxyboss.github.io/manic-page-builder-test/preview.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Page logo'
      },
      /**
       * Open Graph Facebook Card
       */
      { hid: 'og:site_name', property: 'og:site_name', content: 'Manic Page Builder Test' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://foxyboss.github.io/manic-page-builder-test'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'foxyboss page built with Manic'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'foxyboss page built with Manic'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://foxyboss.github.io/manic-page-builder-test/preview.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://foxyboss.github.io/manic-page-builder-test/preview.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Manic logo'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://foxyboss.github.io/manic-page-builder-test/`
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  };