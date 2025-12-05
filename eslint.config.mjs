import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // console 직접 호출 금지
      "no-console": "error",
      // localStorage, sessionStorage 직접 호출 금지
      "no-restricted-globals": [
        "error",
        {
          name: "localStorage",
          message:
            "Use localStorageWrapper from '@/services/localStorage' instead of direct localStorage access.",
        },
        {
          name: "sessionStorage",
          message:
            "Use sessionStorageWrapper from '@/services/sessionStorage' instead of direct sessionStorage access.",
        },
      ],
    },
  },
  // services 폴더 내에서는 예외 허용
  {
    files: ["src/services/**/*.ts"],
    rules: {
      "no-console": "off",
      "no-restricted-globals": "off",
    },
  },
])

export default eslintConfig
