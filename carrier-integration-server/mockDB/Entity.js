import jsonfile from 'jsonfile';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export class Entity {

  static filePath = path.join(__dirname, "mockDB.json");

  static async openDB() {
    return jsonfile.readFile(this.filePath);
  }

  static async saveDB(db) {
    return jsonfile.writeFile(this.filePath, db);
  }
}