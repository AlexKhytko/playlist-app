// tests/search.test.ts
import { test, expect } from '@playwright/test';

test('Search functionality works', async ({ page }) => {
  await page.goto('/');

  const searchInput = page.locator('#\\:r0\\:-label');
  await searchInput.fill('Summer Breeze');

  const trackList = page.locator('.track-item');
  const trackCount = await trackList.count();

  for (let i = 0; i < trackCount; i++) {
    const trackText = await trackList.nth(i).textContent();
    expect(trackText).toContain('Summer Breeze');
  }
});
