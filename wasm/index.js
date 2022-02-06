import { instantiate } from './loader.js';
// const imports = { /* imports go here */ };
export default function loadWasm(imports = { }) {
  return fetch('./wasm/build/optimized.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => {
      return instantiate(buffer, imports).then(mod => mod.exports)
    });
}
