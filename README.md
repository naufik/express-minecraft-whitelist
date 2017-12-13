# Express Minecraft Whitelist

A simple project I created while following `express.js` and `typescript` tutorials, so it's not the best in terms of organization but it works.

This is a simple API backend that allows you to whitelist minecraft players through HTTP get requests. Essentially this is only a **text-file appender** but it sounds fancier when acting as a Minecraft whitelister - which is what I am using it for at the moment.

## Pre-build Configuration

Before you can use the server, you need to make some changes to the source **before** compiling the server. The changes you need to make is in the `customization.ts` file. This file acts as the "customizable part" of the server -- any modificaiton done here is deemed safe.

You should modify this file as:
1. Change the `WHITELIST_TXT` constant to point at your Minecraft Server's whitelist.txt file.
2. Guides on how to set up password-based whitelisting will be here soon.

## Building the server

To build the Express server (that is, compiling from the `typescript` source code to the `javascript` code):

1. Fire up terminal and navigate to the folder where you cloned the project.
2. Run `npm install`, this installs the `nodejs` dependencies of the project including `typescript`, `express` and all the `@types/*` file required.
3. Type `npm run compile`, this fires up the TypeScript compiler (`tsc`) and outputs all the `.js` files to the `./dist/` directory. 
   **If you would like to change any compilation configuration, modify `tsconfig.json` to your liking.**
4. The server is already built at this point.


## Starting the server

Once the server is build, use `npm start` to start the server.

This simply runs the express server on the `./dist/index.js` file that you have previously built.

Check `package.json` for more details on what each command does.

## Whitelisting Players

### Check if a player is whitelisted

To check if a player is whitelisted, send a `GET` request to your server with parameter `player:playername`. Alternatively, open the page:

```
http://dummy.hostname:3000/:playername
```

(replacing the `:playername` with the name of the player you want to check).

### Whitelisting a Player

To whitelist a player, send an HTTP `POST` request to the root of the server with the `application/json` header - and members of the request body as follows:

```json
{
  "player": "name of the player, required",
  "key": "optional key object"
}
```

- The optional `"key"` member depends on the type of validation (i.e. whitelisting with a password). When no validation is ignored, this member is not needed - and ignored whenever provided.
- The help on using **password** validation will appear soon. The method to do this right now is so not-user friendly, so this will appear probably after I refactor the code.

## Configuring the Server

### Configuration File

**Feature not added yet**.

### Writing Custom Validators

**Feature not added yet.**

## License

*MIT License*.