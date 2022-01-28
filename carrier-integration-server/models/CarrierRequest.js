import { v4 as newid } from "uuid";
import { Entity } from "../mockDB/Entity.js";

export class CarrierRequest extends Entity{
  id;
  carrierId;
  url;
  headers;
  method;
  body;
  usernameTag;
  passwordTag;

  static async get(carrierId){
    const db = await super.openDB();
    const carrierRequest = db.carrierRequests.find(request => request.carrierId == carrierId);
    return carrierRequest;
  }

  static async create(carrier, carrierRequest){
    const db = await super.openDB();
    carrierRequest.id = newid();
    carrierRequest.carrierId = carrier.id;
    db.carrierRequests.push(carrierRequest);
    await super.saveDB(db);
  }
}