const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'next-coursejs',
                mongodb_password: 'cGvmI0GGeLQ3IbWu',
                mongodb_clustername: 'cluster0',
                mongodb_databas: 'my-site',
            }
        }
    }
    // Values for production
    return {
        env: {
            mongodb_username: 'next-coursejs',
            mongodb_password: 'cGvmI0GGeLQ3IbWu',
            mongodb_clustername: 'cluster0',
            mongodb_databas: 'my-site',
        }
    }

};