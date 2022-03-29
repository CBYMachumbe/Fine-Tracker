import feathers from "@feathersjs/client";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
export const API_BASE_URL = "http://localhost:3030";

const socket = io(API_BASE_URL);
const client = feathers();

client.configure(socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export const apiClient = client;
