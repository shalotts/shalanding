export type Bread = {
  href: string
  name: string
}

export interface PropsConsoleBreads {
  data: Bread[];
}

export interface PropsCbTag {
  tagClass?: string | [];
  arrowClass?: string | [];
}