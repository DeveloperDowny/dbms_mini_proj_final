import * as db from "./db.js";
import * as helper from "../helper.js";
import config from "../config.js";

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Money_transaction LIMIT ${offset}, ${config.listPerPage};`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

export default getMultiple;
