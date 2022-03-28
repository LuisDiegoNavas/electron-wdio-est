

describe('Onbording', function () {

  it('C4420 should skip tutorial', async function () {
    const title = await browser.getTitle();
    expect(title).toEqual('Test');
    await browser.pause(4000)
  })
})
