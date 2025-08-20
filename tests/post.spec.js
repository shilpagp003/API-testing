import { test, expect, request } from '@playwright/test';

test('POST METHOD',async()=>{
  const apicontext=await request.newContext()
  const res=await apicontext.post('https://restful-booker.herokuapp.com/booking/',{data:
    {
  firstname: 'Shilpa',
  lastname: 'Smith',
  totalprice: 119,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'Breakfast'
    }
  })
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    const bookingId = body.bookingid;
    console.log('Created Booking ID:', bookingId);
  
})