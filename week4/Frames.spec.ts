import { expect, test } from '@playwright/test';

test('Handle prompt and verify result conditionally', async ({ page }) => {
  const action = 'accept';

  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");

  const frame = page.frameLocator('#iframeResult');

  page.on('dialog', async (log) => {
    expect(log.type()).toBe('prompt');

    if (action === 'accept') {
      await log.accept('Ramya');
    } else {
      await log.dismiss();
    }
  });

  await frame.getByRole('button', { name: 'Try it' }).click();

  if (action === 'accept') {
    await expect(frame.locator("//p[@id='demo']")).toHaveText(
      'Hello Ramya! How are you today?'
    );
  } else {
    await expect(frame.locator("//p[@id='demo']")).toHaveText('User cancelled the prompt.');
  }
});