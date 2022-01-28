
import { Entity } from '../mockDB/Entity.js';
import { v4 as newid } from 'uuid';

export class Carrier extends Entity{

  id;
  name;
  url;

  constructor(name, url){
    this.id = newid();
    this.name = name;
    this.url = url;
  }

  static async get(id){
    const db = await super.openDB();
    return db.carriers.find(carrier => carrier.id === id)
  }

  static async getAll(){
    const db = await super.openDB();
    return db.carriers;
  }

  static async create(carrier){
    const db = await super.openDB();
    carrier.id = newid();
    db.carriers.push(carrier);
    await super.saveDB(db);
    return carrier;
  }
}