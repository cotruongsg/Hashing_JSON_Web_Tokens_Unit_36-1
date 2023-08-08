/** Common config for message.ly */
const { username_password , host_ip_port } = require("../Messagely-Unit_36-1/secret");
// read .env files and make environmental variables

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? `postgresql://${username_password}@${host_ip_port}/messagely_test`
  : `postgresql://${username_password}@${host_ip_port}/messagely`;

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};