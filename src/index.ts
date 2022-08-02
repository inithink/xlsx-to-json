import * as XLSX from "xlsx";

interface Result {
  sheetName: string,
  content: string[][]
}

interface Options {
  parseHeader: boolean;
}

export function xlsxToJSON(path: string, options?: Options): Result[] {
  let workbook = XLSX.readFile(path);
  let result: Result[] = [];
  for (const sheetName of workbook.SheetNames) {
    let sheet = workbook.Sheets[sheetName];
    let content = XLSX.utils.sheet_to_json(sheet, {
      header: options?.parseHeader ? undefined : 1,
    });

    result.push({
      sheetName,
      content: content as any,
    });
  }
  return result;
}
