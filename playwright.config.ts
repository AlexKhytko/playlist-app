import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests', // Папка с тестами
  fullyParallel: true, // Запускать тесты параллельно
  forbidOnly: !!process.env.CI, // Запрещать запуск только некоторых тестов, если в CI
  retries: process.env.CI ? 2 : 0, // Повторить тесты, если они не прошли (в CI — 2 попытки)
  workers: process.env.CI ? 1 : undefined, // Ограничить количество воркеров до 1 в CI

  reporters: [ // Форматы отчётов
    ['list'],
    ['html']
  ],

  use: {
    screenshot: 'only-on-failure', // Делать скриншоты только при неудаче
    baseURL: process.env.STAGING, // Основной URL для тестов
  },
 projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://vite-react-alpha-lemon.vercel.app/' },
    },
  ],
});
