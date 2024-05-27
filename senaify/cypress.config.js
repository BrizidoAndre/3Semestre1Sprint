const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // testIsolation serve para cada teste não reiniciar todo o site novamente,
    // em outras palavras se o primeiro teste ir para uma página o segundo se manterá nesta página
    testIsolation:false,
    reactNativeHotReload: false,

    // a url que servirá como base para qualquer navegação 
    baseUrl: "http://localhost:8081",

    // tamanho da tela
    viewportWidth: 414,
    viewportHeight: 896,
  },
});
