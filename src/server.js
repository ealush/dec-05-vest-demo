import wait from "wait";

export async function doesUserExist(username) {
  await wait(1000);

  // fake taken username.
  enforce(parseInt(btoa(username), 36) % 3).notEquals(0);
}
