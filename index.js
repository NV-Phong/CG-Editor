import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import path from "path";

const filePath = "./data.json";

// Tạo số ngẫu nhiên
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Kiểm tra ngày hợp lệ trong năm 2024
const isValidDate = (date) => {
   const startDay = moment("2024-01-01");
   const endDay = moment("2024-12-31");
   return date.isBetween(startDay, endDay, null, "[]");
};

// Đánh dấu commit cho một ngày cụ thể
const markCommit = async (date) => {
   const data = { date: date.toISOString() };

   try {
      await jsonfile.writeFile(filePath, data, { spaces: 2 });
      const git = simpleGit();
      await git.add([filePath]);
      await git.commit(date.toISOString(), { "--date": date.toISOString() });
   } catch (err) {
      console.error("Error while committing:", err);
   }
};

// Tạo các commit ngẫu nhiên trong năm 2024
const makeCommits = async (n) => {
   const git = simpleGit();
   for (let i = 0; i < n; i++) {
      // Tạo ngày ngẫu nhiên trong năm 2024
      const randomDays = randomInt(0, 364);  // 2024 có 366 ngày (năm nhuận)
      
      const randomDate = moment("2024-01-01").add(randomDays, "days");

      if (isValidDate(randomDate)) {
         console.log(`Creating commit: ${randomDate.toISOString()}`);
         await markCommit(randomDate);
      } else {
         console.log(`Invalid date: ${randomDate.toISOString()}, skipping...`);
      }
   }

   console.log("Pushing all commits...");
   await git.push();
};

// Chạy quá trình tạo commit
makeCommits(50000).catch(console.error);
