module.exports = {
    apps: [
        {
            name: 'calldoctor-static',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENVpm: 'production',
                PORT: 3000,
            },
        },
    ],
};
