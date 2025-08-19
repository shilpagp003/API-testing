import { test, expect, request } from '@playwright/test';

test('POST', async () => {
  const apiContext = await request.newContext({ ignoreHTTPSErrors: true });

  const user = {
    name: "John Doe",
    job: "Developer"
  };

  const response = await apiContext.post('https://reqres.in/api/users', {
    data: user
  });

  await expect(response.status()).toBe(401);
});
