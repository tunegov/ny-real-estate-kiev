import Datastore from 'nedb';

const ds = new Datastore({ filename: 'chanels' });

ds.loadDatabase();

export const insert = (chatID: number) => {
  ds.find({ chatID }, (err, docs) => {
    if (err || !docs || !docs.length) {
      ds.insert({ chatID });
    }
  });
};

export const getAll = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    ds.find({}, (err, docs) => {
      if (!err) {
        resolve(docs);
      } else {
        reject(err);
      }
    });
  });
};
