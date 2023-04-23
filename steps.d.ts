/// <reference types='codeceptjs' />
type steps_file = typeof import('./First_test.js');

declare namespace CodeceptJS 
{
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation 
  {
    interface Actions {}
  }
}
