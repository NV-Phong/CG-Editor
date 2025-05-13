import moment from "moment";
import simpleGit from "simple-git";
import { markCommit } from "./utils.js";

const makeCommits = async (startDate, endDate, commitsPerDay) => {
   if (!moment(startDate).isValid() || !moment(endDate).isValid()) {
      throw new Error('Invalid date format. Use YYYY-MM-DD');
   }

   const start = moment(startDate);
   const end = moment(endDate);

   if (end.isBefore(start)) {
      throw new Error('End date must be after start date');
   }

   if (commitsPerDay < 1) {
      throw new Error('Commits per day must be at least 1');
   }

   const git = simpleGit();
   const currentDate = start.clone();

   while (currentDate.isSameOrBefore(end)) {
      for (let i = 0; i < commitsPerDay; i++) {
         console.log(`Creating commit ${i + 1}/${commitsPerDay} for: ${currentDate.format('YYYY-MM-DD')}`);
         await markCommit(currentDate);
      }
      currentDate.add(1, 'days');
   }

   console.log("Pushing all commits...");
   await git.push();
};

makeCommits('2024-05-12', '2024-05-12', 50).catch(console.error);
