
import { test, expect, request } from '@playwright/test';

test('POST', async () => {

  const apiContext = await request.newContext({
  ignoreHTTPSErrors: true
});
  const newUser = { name: 'John Doe', job: 'Developer' };

  const response = await apiContext.post('https://reqres.in/api/users', {
    data: newUser
  });
  const data = await response.json();
  console.log(data);
});


test('PUT', async () => {
  const apiContext = await request.newContext();
  const updatedUser = { name: 'Jane Doe', job: 'Manager' };

  const response = await apiContext.put('https://reqres.in/api/users/2', {
    data: updatedUser
  });

  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});



