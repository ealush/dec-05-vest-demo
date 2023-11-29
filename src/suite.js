import { create, test, enforce, only, warn, include, skipWhen } from "vest";
import wait from "wait";

const suite = create((data = {}, currentField) => {
  only(currentField);
  include("confirm").when("password");

  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty();
  });
  test("username", "Username is too short", () => {
    enforce(data.username).longerThan(2);
  });

  test.memo(
    "username",
    "Username already taken",
    () => {
      return doesUserExist(data.username);
    },
    [data.username]
  );

  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });
  test("password", "Password is too short", () => {
    enforce(data.password).longerThan(2);
  });
  test("password", "Password is weak. maybe add a number", () => {
    warn();
    enforce(data.password).matches(/[0-9]/);
  });

  skipWhen(!data.confirm, () => {
    test("confirm", "Passwords do not match", () => {
      enforce(data.confirm).equals(data.password);
    });
  });

  test("tos", () => {
    enforce(data.tos).isTruthy();
  });
});

export default suite;

async function doesUserExist(username) {
  await wait(1000);

  // fake taken username.
  enforce(parseInt(btoa(username), 36) % 3).notEquals(0);
}
