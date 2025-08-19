import { test, expect, request } from '@playwright/test';

test('DELETE /api/users/2', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204); // No Content
});
