/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config
It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.
We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md
Happy linting! 💖
*/
const rules = {
  "promise/prefer-await-to-then": ["error"],
  indent: ["error", 2],
  "linebreak-style": [
    "error",
    process.platform === "win32" ? "windows" : "unix"
  ],
  "import/no-default-export": ["off"], //switched to off
  "import/no-cycle": ["warn"],
  "import/prefer-default-export": "off",
  semi: ["error", "never"],
  "@typescript-eslint/semi": ["error", "never"],
  quotes: [
    "error",
    "single",
    {
      avoidEscape: true
    }
  ],
  "jsx-quotes": ["error", "prefer-single"],
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-empty-interface": "off",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "react/jsx-props-no-spreading": "off",
  "import/extensions": "off",
  "react/no-array-index-key": "off",
  "react/jsx-curly-brace-presence": [
    "error",
    {
      props: "always",
      children: "always"
    }
  ],
  "max-len": "off",
  "no-console": [
    "warn",
    {
      allow: ["error", "warn"]
    }
  ],
  "react/jsx-key": "error",
  "@typescript-eslint/no-unused-vars": "error",
  indent: "off",
  "react/function-component-definition": [
    2,
    {
      namedComponents: "arrow-function"
    }
  ],
  "react/jsx-filename-extension": "off",
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "function",
      format: ["PascalCase", "camelCase"]
    },
    {
      selector: "typeAlias",
      format: ["PascalCase"]
    }
  ],
  "@typescript-eslint/no-empty-function": "error",
  "padding-line-between-statements": [
    "warn",
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "always", prev: "*", next: "if" },
    { blankLine: "always", prev: "*", next: "export" }
  ],
  "require-await": "warn",
  // "@typescript-eslint/await-thenable": "warn",
  "react/require-default-props": "off",
  "no-underscore-dangle": "off",
  "react/no-unstable-nested-components": "error",
  "@typescript-eslint/no-shadow": "warn",
  "jsx-a11y/label-has-associated-control": "error",
  "no-nested-ternary": "error",
  "jsx-a11y/anchor-is-valid": "error",
  "jsx-a11y/no-noninteractive-element-interactions": "error",
  "eol-last": "error",
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
      singleQuote: true,
      semi: false,
      trailingComma: "none"
    }
  ],
  "no-warning-comments": "warn",
  "react/jsx-no-bind": [
    "error",
    {
      allowArrowFunctions: false
    }
  ]
}

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["deprecation", "promise"],
  extends: [
    "airbnb-typescript-prettier",
    "plugin:storybook/recommended",
    "plugin:promise/recommended"
  ],
  rules,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["deprecation", "promise"],
      extends: ["airbnb-typescript-prettier", "plugin:promise/recommended"],
      rules: {
        ...rules,
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "deprecation/deprecation": "warn",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
            peerDependencies: true
          }
        ]
      },
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    {
      files: ["src/pages/**/*"],
      rules: {
        "import/no-default-export": "off"
      }
    },
    {
      files: ["cypress/support/commands.ts"],
      rules: {
        "promise/prefer-await-to-then": "off",
        "promise/catch-or-return": "off",
        "promise/always-return": "off"
      }
    },
    {
      files: ["src/**/*.stories.tsx"],
      rules: {
        "import/no-default-export": "off"
      }
    },
    {
      files: ["src/@generated/graphql.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      files: ["graphqlCypressSupport.ts", "isHourlyRatePresented.cy.ts"],
      rules: {
        "import/no-default-export": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"]
      }
    },
    {
      files: ["cypress.config.ts"],
      rules: {
        "import/no-default-export": ["off"],
        "import/no-extraneous-dependencies": ["off"]
      }
    }
  ]
}
