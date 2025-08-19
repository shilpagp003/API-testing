import { test, expect, request } from '@playwright/test';

test('GET', async () => {
  const apiContext = await request.newContext({ ignoreHTTPSErrors: true });

  const response = await apiContext.get('https://reqres.in/api/users');
  const responseJson = await response.json();

  console.log(responseJson);
  expect(response.status()).toBe(200);
});
