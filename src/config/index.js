const envFound = require('dotenv').config();

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  /*
   *   server config
   */
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),

  /**
   * Api config
   */
  api: {
    prefix: process.env.API_PREFIX || 'api',
  },

  /**
   * Thinkspeak key config
   */

  thinkspeak: {
    write: process.env.TSK_WRITE_KEY,
    read: process.env.TSK_READ_KEY,
    channel_id: process.env.CHANNEL_ID,
    temp_field_id: process.env.TSK_FIELD_TEMP,
    hud_field_id: process.env.TSK_FIELD_HUD
  },
};
