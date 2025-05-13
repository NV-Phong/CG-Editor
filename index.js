import moment from "moment";
import simpleGit from "simple-git";
import { isValidDate, markCommit } from "./utils.js";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeRandomCommits = async (n) => {
   const git = simpleGit();
   for (let i = 0; i < n; i++) {
      const randomDays = randomInt(0, 364);
      const randomDate = moment("2024-01-01").add(randomDays, "days");

      if (isValidDate(randomDate)) {
         console.log(`Creating commit: ${randomDate.toISOString()}`);
         await markCommit(randomDate);
      }
   }
   console.log("Pushing all commits...");
   await git.push();
};

makeRandomCommits(50000).catch(console.error);
