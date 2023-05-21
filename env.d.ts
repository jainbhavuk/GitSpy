/// <reference types="vite/client" />;

type ImportMetaEnv = {
  VITE_GITHUB_BASE_URL?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
