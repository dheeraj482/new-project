import {test} from "@playwright/test"
test("radio button",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
 await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
 await page.locator('input#attended').click()
 await page.locator('input#willing_a').click()
 await page.getByRole('button',{name:'Continue'})
 console.log("this is vs code")




})
