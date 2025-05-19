import moment from "moment";
import simpleGit from "simple-git";
import { markCommit } from "./utils.js";

const git = simpleGit();
const randomInt = (min, max) =>
   Math.floor(Math.random() * (max - min + 1)) + min;

const makeRandomCommits = async (n = 365, commitsPerDay = 5) => {
   const commits = [];
   for (let i = 0; i < n; i++) {
      const baseDate = moment("2024-01-01").add(randomInt(0, 364), "days");
      for (let j = 0; j < commitsPerDay; j++) {
         const date = baseDate
            .clone()
            .add(randomInt(0, 86399), "seconds")
            .toISOString();
         commits.push(date);
      }
   }
   commits.sort(); // Sắp xếp theo thời gian

   for (const date of commits) {
      console.log(`Tạo commit: ${date}`);
      await markCommit(date);
   }

   console.log("Push commit...");
   await git.push();
};

makeRandomCommits(365, 1).catch(console.error); // 365 ngày, 5 commit/ngày
