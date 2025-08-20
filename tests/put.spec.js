
import { test, expect, request } from '@playwright/test';
test('PUT METHOD',async()=>{
  const apicontext=await request.newContext()
  const res=await apicontext.put('https://restful-booker.herokuapp.com/booking/67',{headers:{Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='}},
    {
    data:{
        firstname: 'GP',
        lastname: 'SHILPA',
        totalprice: 131,
        depositpaid: true,
        bookingdates: { checkin: '2018-03-01', checkout: '2019-04-01' },
        additionalneeds: 'BREAKFAST'
        }
  })
  expect(res.status()).toBe(201)
}) 


