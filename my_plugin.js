import { URLSearchParams } from 'url'
export default function (options) {
  let index = 1
  return {
    name: 'mu_plugin',
    resolveId(id) {
      // console.log(id);
    },
    load(id) {

      // return {
      //   moduleId,
      //   query,
      //   pageId,
      // }
    },

    transform(src, id) {
      console.log('transform');
      // if (id.indexOf('.vue')) {
      //   return src.replace(/console.log\(.*\)/,
      //     ``)
      // }
    },
    options(options) {
      console.log('options');
      console.log(options);
    },
    // vite hook
    config(config) {
      console.log('config');
    },
    buildStart(buildStart) {
      // console.log(buildStart);
      console.log('buildStart');
    },
    configResolved(configResolved) {
      console.log(configResolved);
      console.log('configResolved');
    },
    configureServer(server) {
      console.log('server')
    },
    transformIndexHtml(html) {
      return html.replace(
        /console.log\(.*\)/,
        ``
      )
    }
  }
}
