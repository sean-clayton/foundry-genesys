import { GENESYS } from "./config";

Hooks.once("init", () => {
  console.log("Initializing Genesys.");

  game.genesys = {
    applications: {},
    canvas: {},
    config: null,
    dice: null,
    entities: null,
    macros: null,
    migrations: null,
    rollItemMacro: null,
  };

  CONFIG.GENESYS = GENESYS;
});

Hooks.once("setup", () => {
  console.log("Setting up Genesys.");
});

Hooks.once("ready", () => {
  console.log("Foundry is ready. Finishing up Gensys.");
});
