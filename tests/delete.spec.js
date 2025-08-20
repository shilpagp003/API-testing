import { test, expect, request } from '@playwright/test';

test('DELETE METHOD',async()=>{
  const apiContext=await request.newContext()
  const res=await apiContext.delete('https://restful-booker.herokuapp.com/booking/67',{headers:{Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='}})
  expect(res.status()).toBe(201);
})
