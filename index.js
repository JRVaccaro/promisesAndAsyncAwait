// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}
try{
    const database = await central(id);

    const results = await Promise.all([
        dbs[database](id)
        vault(id)
    ]);
}

const dbInfo = results[0];
const valutInfo = results[1];

return{
id: id,
name: valutInfo.name,
email: valutInfo.email,
adress: valutInfo.adress,
phone: valutInfo.phone,
username: dbInfo.username,
website: dbInfo.website,
company: dbInfo.company

} catch (error){
    throw error;

}
getUserData(1)