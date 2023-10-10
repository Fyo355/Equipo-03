import { configDefaults, defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "**/*integration-test.js"],
    exclude: [...configDefaults.exclude, "**/*e2e-test.js"],
  },
})
