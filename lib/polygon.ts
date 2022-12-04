import { restClient } from "@polygon.io/client-js";

const rest = restClient("api key");

rest.forex.previousClose("C:EURUSD").then(/* your success handler */);
