import { test } from "@playwright/test"
test("Goibibo", async ({ browser }) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.goibibo.com/")
    page.getByLabel("departure").click()

})

