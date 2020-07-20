// Database operations cli

const resetMongo = require("./mongo/reset");

// ========================================

require("yargs") // eslint-disable-line
  .usage("Usage: node $0 <command>")
  .command(
    "reset",
    "Reset all data in database.",
    () => {},
    (argv) => {
      resetMongo();
    }
  )
  .command(
    "export",
    "Export student selections.",
    () => {},
    (argv) => {
      console.log(argv);
    }
  )
  .command(
    "update-opentime",
    "Update openTime.",
    (yargs) => {
      yargs.positional("resource", {
        describe: "Resource to be update",
        choices: ["opentime"],
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .alias("h", "help")
  .version(false)
  .strictCommands(true)
  .demandCommand(1, "No command specified.").argv;
