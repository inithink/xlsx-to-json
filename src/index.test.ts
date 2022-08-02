import {xlsxToJSON} from "./index";
import * as path from "path";

test('with-header', () => {
  let json = xlsxToJSON(path.join(__dirname, '../test-data/with-header.xlsx'), {
    parseHeader: true,
  });
  expect(json[0].sheetName).toBe('Sheet1');
  expect(json[0].content).toStrictEqual([{
    Name: 'David',
    Comment: '000-0000',
  }]);
});

test('without-header (default)', () => {
  let json = xlsxToJSON(path.join(__dirname, '../test-data/without-header.xlsx'), );
  expect(json[0].sheetName).toBe('Sheet1');
  expect(json[0].content).toStrictEqual([
    ['John', '000-0001'],
    ['David', '000-0000'],
  ]);
});

test('prev-excel-version', () => {
  let json = xlsxToJSON(path.join(__dirname, '../test-data/prev-excel-version.xls'), {
    parseHeader: false,
  });
  expect(json[0].sheetName).toBe('Sheet1');
  expect(json[0].content).toStrictEqual([
    ['John', '000-0001'],
    ['David', '000-0000'],
  ]);
});
