// will be merged with existing Express Request Session type definition
declare module CookieSessionInterfaces {
  export interface CookieSessionObject {
    isChanged?: boolean;
    isNew?: boolean;
    isPopulated?: boolean;
    jwt: string;
  }
}
