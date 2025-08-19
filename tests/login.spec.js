import {test,expect} from '@playwright/test'

test('login',async({page,request})=>{
const response  = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:
   { userEmail:"shilpagp003@gmail.com",
    userPassword:"Gpshilpa@123"}
})
    
    const jsonresponse=await response.json()
    const token=jsonresponse.token
    console.log(token)

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.evaluate((value)=>{
        localStorage.setItem('token',value) },token)
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash')
    await page.pause()
        

})

