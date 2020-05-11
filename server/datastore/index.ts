import Datastore from 'nedb';

const db = new Datastore({ filename: 'chanels' });

db.loadDatabase();

export default db;
