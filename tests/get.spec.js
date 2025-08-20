import {test,expect,request} from '@playwright/test'

test('GET method',async()=>{
  const apicontext=await request.newContext()
  const resposnse=await apicontext.get('https://restful-booker.herokuapp.com/booking/67')
  const jsonResponse=await resposnse.json()
  console.log(jsonResponse)
  expect(resposnse.status()).toBe(200)
})
