import db from'./db';
import helper from'./helper';
import config from './config';

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, 
    FROM st_info LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

// module.exports = {
//   getMultiple
// }

export default getMultiple;