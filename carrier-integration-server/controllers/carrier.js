import StatusCodes from 'http-status-codes';
import { getReasonPhrase } from 'http-status-codes';
import fetch from 'node-fetch';
import { Carrier } from '../models/Carrier.js'
import { CarrierRequest } from '../models/CarrierRequest.js';

export async function getAllCarriers(req, res){
  const carriers = await Carrier.getAll();
  return res
    .status(StatusCodes.OK)
    .json({carriers});
}

export async function validate(req, res){
  const { carrierId, username, password } = req.body;

  const { name } = await Carrier.get(carrierId);
  const { url, headers, method, body, usernameTag, passwordTag } = await CarrierRequest.get(carrierId);

  console.log(`Validating ${name} at ${url}`);

  const requestBody = { body }
  requestBody[usernameTag] = username;
  requestBody[passwordTag] = password;

  fetch(url, {
    headers: headers,
    method: method,
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    console.log(`Received status code ${response.status} - ${getReasonPhrase(response.status)}`)
    res.status(response.status).json(response.json())
  })
}