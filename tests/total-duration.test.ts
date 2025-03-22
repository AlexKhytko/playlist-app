// tests/total-duration.test.ts
import { test, expect } from '@playwright/test';

test('Verify total duration of playlist', async ({ page }) => {
  await page.goto('/');

  const firstTrackButton = page.locator('#tracklist > div > div:nth-child(1) > button');
  const secondTrackButton = page.locator('#tracklist > div > div:nth-child(2) > button');

  await firstTrackButton.click();
  await secondTrackButton.click();

  const expectedDuration = 3 * 60 + 35 + 3 * 60 + 0; // 3 минуты 35 секунд + 3 минуты 0 секунд
  const totalDurationElement = page.locator('#playlist-duration');
  const textContent = await totalDurationElement.textContent();
  const totalDurationText = textContent?.trim().replace(/[^\d]/g, ''); // Удаляем все символы, кроме цифр
  const totalDuration = parseInt(totalDurationText || '0', 10);
  expect(totalDuration).toBe(expectedDuration);
});
