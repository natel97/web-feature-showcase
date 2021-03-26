# A Showcase of New Web Features

These are some examples of newer web features. Based on my presentation: Do We Need an App for That?

## Running Each Example

NodeJS and npm/npx are required to follow these exact instructions, however there are other ways to host static sites

1. Clone this repository.
2. In the terminal, `cd` into the example you want to use.
3. Run `npx http-server -c1 -p $ENTER_PORT_HERE` (-c1 sets the server cache to 1 second so you can change it easily)
4. Navigate to `localhost:$ENTER_PORT_HERE in the browser
5. Open Dev Tools with F12

## Included Examples

Note: When changing examples on the same port, you may have to clear cache and/or click skipWaiting in the Application tab of dev-tools to get an updated webpage / service worker

### [Background Sync](./Background-Sync)

Take action when your user reconnects to the internet, like sync data!

### [Canvas](./Canvas)

Show some detailed graphics / rendering

### [Simple Push Notifications](./Simple-Push-Notifications)

Send notifications on the frontend only

### [Service Worker Cache](./SW-Cache)

Cache data to save time when users revisit your site.

### [Web Assembly](./WASM)

Process complex data quicker compiled from a language of your choice

### [Web Push Notifications](./Web-Push-Notifications)

Receive updates from a server and notify your users of updates
