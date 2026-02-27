import fs from 'fs';
import path from 'path';

export function readFileHelper(dirName: string) {
  const pathFile = path?.join(__dirname, dirName);

  const dataJSON = fs.readFileSync(pathFile, 'utf-8');
  const data = JSON.parse(dataJSON);

  return data;
}
