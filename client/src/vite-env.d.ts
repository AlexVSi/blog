/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly CLIENT_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}