import * as XLSX from "xlsx";

interface Result {
  sheetName: string,
  content: string[][]
}

export function xlsxToJSON(path: string): Result[] {
  let workbook = XLSX.readFile(path);
  let result: Result[] = [];
  for (const sheetName of workbook.SheetNames) {
    let sheet = workbook.Sheets[sheetName];
    let content = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
    });

    result.push({
      sheetName,
      content: content as any,
    });
    console.log(content);
  }
  return result;
}
