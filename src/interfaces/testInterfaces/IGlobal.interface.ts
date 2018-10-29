export interface IGlobal extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: Navigator;
  innerWidth: number;
}