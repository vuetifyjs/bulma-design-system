/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const WebFontLoader = await import('webfontloader')

  WebFontLoader.load({
    google: {
      families: ['Cantarell:100,300,400,500,700,900&display=swap'],
    },
    custom: {
      urls: ['https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'],
      timeout: 2000,
    },
  })
}
