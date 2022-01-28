import { Entity } from "./mockDB/Entity.js";
import { Carrier } from "./models/Carrier.js";
import { CarrierRequest } from "./models/CarrierRequest.js";

const db = await Entity.openDB();
db.carrierRequests = [];
db.carriers = [];
await Entity.saveDB(db);

const carrier = await Carrier.create({
  name: "Progressive",
  url: "https://www.progressive.com/"
})

await CarrierRequest.create(carrier, {
  url: "https://api.progressive.com/onlineaccount/v1/accesstoken",
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:96.0) Gecko/20100101 Firefox/96.0",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/json",
    "api_key": "l8cztShRODyXlvKViptOeKgieie",
    "X-PGRSiteServerId": "5f6659947b764fcfbe78cebe72c5f237",
    "X-PGRClient": "Online Servicing Web Portal",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache"
  },
  method: "POST",
  body: {
    userName: "",
    password: ""
  },
  usernameTag: "userName",
  passwordTag: "password",
})