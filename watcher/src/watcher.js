const fsevents = require('fsevents');

exec("http-server");

const { exec } = require("child_process");
const stop = fsevents.watch(__dirname, (path, flags, id) => {
  const info = fsevents.getInfo(path, flags, id);
  console.log("webpack");
  exec(webpack);
}); // To start observation