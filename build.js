const fs = require("fs");
const arrayToTable = require("array-to-table");

const emailIntents = require("./email-intents.json");
const rideSharingIntents = require("./ride-sharing-intents.json");

const data = arrayToTable(emailIntents);

fs.appendFileSync("README.md", data, "utf-8");
