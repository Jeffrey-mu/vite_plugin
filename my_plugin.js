export default function (options) {
  return {
    name: 'mu_plugin',
    resolveId(id) {
      // console.log(id);
    },
    load(id) {
    },

    transform(src, id) {
    },
    options(options) {
      console.log('options');
    },
    // vite hook
    config(config) {
      console.log('config');
    },
    buildStart(buildStart) {
      console.log('buildStart');
    },
    configResolved(configResolved) {
      console.log('configResolved');
      console.log(configResolved);
    },
    transformIndexHtml(html) {
      console.log(html);
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Title replaced!</title>`
      )
    }
  }
}
