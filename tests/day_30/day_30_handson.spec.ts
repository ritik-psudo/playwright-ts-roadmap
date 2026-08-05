import { test, expect } from "@playwright/test";
import { log } from "node:console";
//Practice Hands On Questions

//Q1. Create tests/day30_api_practice.spec.ts and write a simple test using the JSONPlaceholder fake API (safe for learning):

test("fetch posts for fake JSONPlaceholder API", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  console.log(response.status());
  //200
  await expect(response.status()).toBe(200);
  //passed
  const post = await response.json();
  console.log(post);
  //printing json
  expect(post.id).toBe(1);
  //passed
  expect(post.title).toBeDefined();
  //passed
});

/*
Running 3 tests using 3 workers
[chromium] › tests\day_30\day_30_handson.spec.ts:7:1 › fetch posts for fake JSONPlaceholder API
200
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
[webkit] › tests\day_30\day_30_handson.spec.ts:7:1 › fetch posts for fake JSONPlaceholder API
200
[firefox] › tests\day_30\day_30_handson.spec.ts:7:1 › fetch posts for fake JSONPlaceholder API
200
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
[webkit] › tests\day_30\day_30_handson.spec.ts:7:1 › fetch posts for fake JSONPlaceholder API
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
  3 passed (704ms)
*/

//Q2. Write a POST request test (creating a resource):

test("create a new post via API", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "My Test Post",
        body: "This is a test",
        userId: 1,
      },
    },
  );
  expect(response.status()).toBe(201); //201 status is for "Created"
  console.log(response.status());
  //201

  const post = await response.json();
  console.log(post);
  //printing new json
  expect(post.title).toBe("My Test Post");
});

/*
Running 3 tests using 3 workers
[firefox] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
201
[webkit] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
201
[chromium] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
201
[firefox] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
{ title: 'My Test Post', body: 'This is a test', userId: 1, id: 101 }
[webkit] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
{ title: 'My Test Post', body: 'This is a test', userId: 1, id: 101 }
[chromium] › tests\day_30\day_30_handson.spec.ts:65:1 › create a new post via API
{ title: 'My Test Post', body: 'This is a test', userId: 1, id: 101 }
  3 passed (888ms)
*/

//Q3. Add headers to a request

test("adding custom headers via API", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      headers: {
        "User-Agent": "MyTestBot/1.0",
      },
    },
  );

  await expect(response.status()).toBe(200);
  //200
  console.log(response.status());
});

/*
Running 3 tests using 3 workers
[firefox] › tests\day_30\day_30_handson.spec.ts:105:1 › adding custom headers via API
200
[webkit] › tests\day_30\day_30_handson.spec.ts:105:1 › adding custom headers via API
200
[chromium] › tests\day_30\day_30_handson.spec.ts:105:1 › adding custom headers via API
200
  3 passed (773ms)
*/

//Q4. Combine API + Page (the powerful pattern):

test("setup data via API, verify via UI", async ({ page, request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "API created POST",
        body: "Created Via API",
        userId: 2,
      },
    },
  );
  const post = await response.json();
  const postId = await post.id;

  //UI validation

  await page.goto("https://jsonplaceholder.typicode.com/posts/${postId}");
  await expect(page.locator("h1")).toContainText("API created POST");
});

//Q5. Check response code for errors

test("API returns 404 error", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/99999",
  );
  await expect(response.status()).toBe(404);
  console.log(response.status());
});

/*
Running 3 tests using 3 workers
[firefox] › tests\day_30\day_30_handson.spec.ts:155:1 › API returns 404 error
404
[chromium] › tests\day_30\day_30_handson.spec.ts:155:1 › API returns 404 error
404
[webkit] › tests\day_30\day_30_handson.spec.ts:155:1 › API returns 404 error
404
  3 passed (1.4s)
*/

//Q6. Parse JSON response and assert on nested fields:

test("API response structure", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  const user = await response.json();

  expect(user).toHaveProperty("id");
  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("email");
  expect(user.address).toHaveProperty("city");
});

// Running 1 test using 1 worker,   1 passed (1.1s)
