
(async () => {
    const fetchPromise = fetch('test.wasm');
    const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);
    const result = instance.exports.add(40,2);
    console.log(result);
  })();