Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'systemefoundry-fr-translation',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
