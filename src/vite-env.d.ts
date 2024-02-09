/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_NAME: string
  readonly VITE_CLOUDINARY_KEY: string
  readonly VITE_CLOUDINARY_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}