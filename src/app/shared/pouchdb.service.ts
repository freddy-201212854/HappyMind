import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import * as PouchDBUpsert from 'pouchdb-upsert/dist/pouchdb.upsert';
import { rejects } from 'assert';
PouchDB.plugin(PouchDBUpsert);

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  data: any;
  db: any;
  remote: any;

  constructor() {
    this.db = new PouchDB('autoCare');
    this.remote = 'http://139.144.174.82:5984/autoCare';

    //To know more about options, visit pouchdb.com
    let options = {
      live: true,
      retry: true,
      continuous: true,
      auto_compaction: true,
      auth: {
        username: 'admin',
        password: 'Solidaridad2021*',
      },
    };
    this.db.sync(this.remote, options);
  }

  allDocs() {
    return new Promise(resolve => {
      this.db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
        let k, items = [], row = doc.rows;

        for (k in row) {
          var item = row[k].doc

          items.push(
            {
              id: item._id
            });
        }

        resolve(items);
      });
    });
  }

  getDoc(id) {
    return new Promise(resolve => {
      this.db.get(id)
        .then((doc) => {
          console.log(doc)
          resolve(doc);
        })
    });
  }

  saveDoc(data) {
    return new Promise((resolve, reject) => {
      data._id = (moment().unix()).toString();
      this.db.post(data).then((resp) => {
        resolve(resp)
      }).catch((error) => {
        reject(error)
      });
    });
  }

  updateDoc(data) {
    return new Promise((resolve, reject) => {
      this.db.put(data).then((resp) => {
        resolve(resp);
      }).catch((error) => {
        reject(error)
      });
    });
  }

  updateDocument(key, data) {
    return new Promise((resolve, reject) => {
      this.db.upsert(key, function (doc) {
        doc = data;
        return doc;
      }).then(function (res) {
        // success, res is {rev: '1-xxx', updated: true, id: 'myDocId'}
        resolve(res);
      }).catch(function (err) {
        // error
        reject(err);
      });
    });
  }

  deleteDoc(id, rev) {
    return new Promise((resolve, reject) => {
      var comic = { _id: id, _rev: rev };
      this.db.remove(comic)
        .catch((error) => {
          console.log(error);
          reject(false);
        });

      reject(true);
    });
  }

  query(userId) {
    return new Promise((resolve, reject) => {
      this.db.query(function (doc, emit) {
        emit(doc.user, doc);
      }, { key: userId }).then(function (result) {
        // found docs with name === 'foo'

        resolve(result)
      }).catch(function (error) {
        // handle any errors
        console.log(error);
        reject(error)
      });
    });
  }

  queryByActivity(userId, activity) {
    return new Promise((resolve, reject) => {
      this.db.query(function (doc, emit) {
        if (doc.activity == activity) {
          emit(doc.user, doc);
        }
      }, { key: userId }).then(function (result) {
        // found docs with name === 'foo'

        resolve(result)
      }).catch(function (error) {
        // handle any errors
        console.log(error);
        reject(error)
      });
    });
  }

  queryByActivityAndLot(userId, activity, idLot) {
    return new Promise((resolve, reject) => {
      this.db.query(function (doc, emit) {
        if (doc.activity == activity && doc.idLot == idLot) {
          emit(doc.user, doc);
        }
      }, { key: userId }).then(function (result) {
        // found docs with name === 'foo'

        resolve(result)
      }).catch(function (error) {
        // handle any errors
        console.log(error);
        reject(error)
      });
    });
  }
}
