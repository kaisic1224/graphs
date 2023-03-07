import { restClient } from "@polygon.io/client-js";

const rest = restClient(process.env.API_KEY);

export default rest;
