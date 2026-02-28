module.exports = {
    apps: [
        {
            name: 'calldoctor-static',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 2,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },
    ],
};
