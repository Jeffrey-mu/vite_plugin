export default function (options) {
  console.log(123);
  return {
    name: 'mu_plugin',
    resolveId(id) {
      // console.log(id);
    },
    load(id) {
      // console.log(id);
    }
  }
}
