module.exports = {
    apps: [{
        name: "cs-drop",
        script: "npm",
        args: "start",
        autorestart: true,
        max_erstarts: 3,
        restart_delay: 3000,
        env: {
            NODE_ENV: "production",
        }
    }],
    deploy: {
        production: {
            "user": 'rodoro',
            "host": '192.168.1.10',
            "ref": "origin/master",
            "repo" : "git@github.com:Rodoro/cs-drop.git",
            "path" : "/home/rodoro/front/cs-drop",
            "key"  : "/home/rodoro/.ssh/id_ed25519.pub",
            "post-deploy": "npm i; npm run build; pm2 reload ecosystem.config.js --env production",
        }
    }
};