//swEnvBuild.js - script that is separate from webpack
require('dotenv').config(); // make sure you have '.env' file in pwd
const fs = require('fs');

fs.writeFileSync('./dist/public/swenv.js',
`
const process = {
  env: {
    VUE_APP_FCM_SENDER_ID: conf.VUE_APP_FCM_SENDER_ID
  }
}
`);