import jsonfile from "jsonfile";
import simpleGit from "simple-git";

const filePath = "./data.json";
const git = simpleGit();

export const markCommit = async (date) => {
   try {
      await jsonfile.writeFile(filePath, { date }, { spaces: 2 });
      await git.add(filePath);
      await git.commit(date, { "--date": date });
   } catch (err) {
      console.error(`Lỗi commit ${date}:`, err);
   }
};
