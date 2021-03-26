this.addEventListener("push", function (e) {
  e.waitUntil(
    self.registration.showNotification("Message from remote server", {
      body: e.data.text(),
    })
  );
});
