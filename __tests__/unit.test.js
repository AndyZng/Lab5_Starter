// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test("test if 1 is not a phone number (true)", () => {
  expect(isPhoneNumber("1")).toBe(false);
});
test("test if (124)135-6493) is a phone number (true)", () => {
  expect(isPhoneNumber("(124)135-6493)")).toBe(true);
});
test("test if 100 is a phone number (false)", () => {
  expect(isPhoneNumber("1")).toBe(true);
});
test("test if (124)000-0000) is a phone number (false)", () => {
  expect(isPhoneNumber("(124)000-0000)")).toBe(false);
});
test("test if hi@gmail.com is an email (true)", () => {
  expect(isEmail("hi@gmail.com")).toBe(true);
});
test("test if bert@gmail.hi is an email (true)", () => {
  expect(isEmail("bert123@gmail.com")).toBe(true);
});
test("test if @gmail.com is an email (false)", () => {
  expect(isEmail("@gmail.com")).toBe(true);
});
test("test if 123#gmail.com is an email (false)", () => {
  expect(isEmail("123#gmail.com")).toBe(true);
});
test("test if abc is a strong password (false)", () => {
  expect(isStrongPassword("abc")).toBe(false);
});
test("test if awfe493_8 is a strong password (true)", () => {
  expect(isStrongPassword("awfe493_8")).toBe(true);
});
test("test if ^^^^aefw1431 is a strong password (false)", () => {
  expect(isStrongPassword("^^^^aefw1431")).toBe(true);
});
test("test if aaaaaaaaaaaaaaaaaaa is a strong password (false)", () => {
  expect(isStrongPassword("aaaaaaaaaaaaaaaaaaa")).toBe(true);
});
test("test if 12/3/2019 is a date (true)", () => {
  expect(isStrongPassword("12/3/2019")).toBe(true);
});
test("test if 4/03/1990 is a date (true)", () => {
  expect(isStrongPassword("4/03/1990")).toBe(true);
});
test("test if 1/3/22 is a date (true)", () => {
  expect(isStrongPassword("1/3/22")).toBe(false);
});
test("test if 10/300/22 is a date (true)", () => {
  expect(isStrongPassword("10/300/22")).toBe(false);
});
test("test if #FFF is a hex color (true)", () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test("test if #ABCD71 is a hex color (true)", () => {
  expect(isHexColor("#ABCD71")).toBe(true);
});
test("test if #Gafj99 is a hex color (false)", () => {
  expect(isHexColor("#Gafj99")).toBe(true);
});
test("test if #AAAA is a hex color (false)", () => {
  expect(isHexColor("#AAAA")).toBe(true);
});





