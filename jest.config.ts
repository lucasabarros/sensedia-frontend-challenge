import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { Config } from "@jest/types";

// Configuração Jest
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Configura o ambiente de teste como browser

  // Mapeia os aliases do TypeScript usando as configurações do tsconfig.json
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/src/", // Adiciona o prefixo para apontar para o diretório src
    }),
    // Mapeia arquivos estáticos como SVG, PNG, etc.
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "./__mocks__/fileMock.ts",
  },

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(svg|png|jpg|jpeg|gif)$": "jest-transform-stub", // Adiciona o jest-transform-stub para arquivos estáticos
  },

  moduleDirectories: ["node_modules", "src"], // Facilita a importação de módulos da src

  // Adiciona o setupTests.ts
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
};

export default config;
