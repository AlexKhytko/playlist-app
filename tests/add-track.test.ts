import { test, expect } from '@playwright/test';

test('Add track to playlist', async ({ page }) => {
  await page.goto('/');

  const addButton = page.locator('#tracklist > div > div:nth-child(1) > button');
  await addButton.click();
  const playlist = page.locator('#playlist > div > div');
  const playlistText = await playlist.textContent();
  expect(playlistText).toContain('Summer Breeze');
});

