/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.module.css' {
  const classes:{ readonly [key:string] : string}
  export default classes
}

declare module '*.module.sass' {
  const classes:{ readonly [key:string] : string}
  export default classes
}

declare module '*.module.scss' {
  const classes:{ readonly [key:string] : string}
  export default classes
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
