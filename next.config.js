const env = require('dotenv').config()

module.exports = {
    mode: 'universal',
    env: env.parsed,
    images: {
        domains: ['images.ctfassets.net'],
    },
}

