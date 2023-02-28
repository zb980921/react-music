/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** API base url */
  readonly VITE_APP_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
