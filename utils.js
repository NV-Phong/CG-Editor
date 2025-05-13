import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const filePath = "./data.json";

export const isValidDate = (date) => {
   const startDay = moment("2024-01-01");
   const endDay = moment("2024-12-31");
   return date.isBetween(startDay, endDay, null, "[]");
};

export const markCommit = async (date) => {
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
