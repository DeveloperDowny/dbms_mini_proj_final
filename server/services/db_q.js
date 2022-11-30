import * as db from "./db.js";
import * as helper from "../helper.js";
import config from "../config.js";

async function getUser(email) {
  const rows = await db.query(`SELECT * FROM account WHERE email=${email}`);
  const data = helper.emptyOrRows(rows);

  return data;
}

// module.exports = {
//   getMultiple
// }

export default getUser;
