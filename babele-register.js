Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'tftloop-fr-translation',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
