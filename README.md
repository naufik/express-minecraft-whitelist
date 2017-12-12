# Express Minecraft Whitelist

A simple project I created while following `express.js` and `typescript` tutorials, so this project is sort of a mess.

This is a simple API backend that allows you to whitelist minecraft players through HTTP get requests. Essentially this is only a **text-file appender** but it sounds fancier when acting as a Minecraft whitelister - which is what I am using it for at the moment.

## Building the server

Since this is a `typescript` project, you will need to build the javascript files of the server. **Before doing this, you should modify `whitelister.ts` and change the `WHITELIST_TXT` variable to point at your Minecraft server's `whitelist.txt` file**. A config-file based modification will be added soon.

1. Fire up terminal and navigate to the folder where you cloned the project.
2. Run `npm install`, this installs the `nodejs` dependencies of the project including `typescript`, `express` and all the `@types/*` file required.
3. Type `npm run compile`, this fires up the TypeScript compiler (`tsc`) and outputs all the `.js` files to the `./dist/` directory. 
   **If you would like to change any compilation configuration, modify `tsconfig.json` to your liking.**
4. The server is already built at this point.

##Starting the server 

Once the server is build, use `npm start` to start the server.

This simply runs the express server on the `./dist/index.js` file that you have previously built.

Check `package.json` for more details on what each command does.

## Configuring the Server

### Configuration File

**Feature not added yet**.

### Writing Custom Validators

**Feature not added yet.**

## License

*MIT License*.