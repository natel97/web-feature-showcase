this.addEventListener("sync", function (event) {
  switch (event.tag) {
    case "update-data":
      return console.log("Connection established, send server updates here!");
    default:
      return console.error("tag not found");
  }
});
