class HelloWorldPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('Hello World Plugin', (state
            // stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
    ) => {
            console.log('我是state',state)
            console.log('Hello World!');
        });
    }
}

module.exports = HelloWorldPlugin;