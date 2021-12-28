export class DisplaySize {
  static isMobile(): boolean {
    const mql = window.matchMedia('(min-width: 460px)')
    return !mql.matches
  }
}
