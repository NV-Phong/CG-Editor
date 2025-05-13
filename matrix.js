import moment from "moment";
import simpleGit from "simple-git";
import { markCommit } from "./utils.js";

const git = simpleGit();

// Chỉ định khoảng thời gian commit
const startDate = "2024-11-17";
const endDate = "2024-11-18";
const commitsPerDay = 100;

// Thêm mảng các ngày được chỉ định
const specifiedDates = [
   //   "2024-11-03",
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

   for (const date of commits) {
      console.log(`Tạo commit: ${date}`);
      await markCommit(date);
   }

   console.log("Push commit...");
   await git.push();
};

makeCustomCommits().catch(console.error);
