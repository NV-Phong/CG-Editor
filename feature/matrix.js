import moment from "moment";
import simpleGit from "simple-git";
import { markCommit } from "./utils.js";

const git = simpleGit();

// Chỉ định khoảng thời gian commit
const startDate = "2025-07-20";
const endDate = "2025-07-26";
const commitsPerDay = 100;

// Thêm mảng các ngày được chỉ định
const specifiedDates = [
   "2025-07-16",
   "2025-07-17",
   "2025-07-18",
];

const makeCustomCommits = async () => {
   const commits = [];

   // Xử lý khoảng thời gian
   const start = moment.utc(startDate);
   const end = moment.utc(endDate);
   const daysDiff = end.diff(start, "days") + 1;

   for (let day = 0; day < daysDiff; day++) {
      const currentDate = start.clone().add(day, "days");
      for (let i = 0; i < commitsPerDay; i++) {
         const date = currentDate
            .clone()
            .add(i * ((24 * 60) / commitsPerDay), "minutes")
            .toISOString();
         commits.push(date);
      }
   }

   // Xử lý các ngày được chỉ định
   for (const specificDate of specifiedDates) {
      const date = moment.utc(specificDate);
      for (let i = 0; i < commitsPerDay; i++) {
         const commitDate = date
            .clone()
            .add(i * ((24 * 60) / commitsPerDay), "minutes")
            .toISOString();
         commits.push(commitDate);
      }
   }

   // Sắp xếp các commit theo thời gian
   commits.sort();

   let commitCount = 1;
   for (const date of commits) {
      console.log(`Tạo commit ${commitCount} • ${date}`);
      await markCommit(date);
      commitCount++;
   }

   console.log("Push commit...");
   await git.push();
};

makeCustomCommits().catch(console.error);
