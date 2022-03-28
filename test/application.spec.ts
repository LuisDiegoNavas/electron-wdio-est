

describe('Onbording', function () {

  it('C4420 should skip tutorial', async function () {
    const title = await browser.getTitle();
    expect(title).toEqual('Test');
    await browser.pause(4000)
    const elem = await $('disabled-checkbox')
    elem.click()
    const elem2 = await $('.make-bigger')
    elem2.click()
    await browser.pause(2000)
  })
})
