export class ThemeService {
  static defineInitialTheme(): string {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const validStoredTheme = storedTheme ? storedTheme === 'dark' || storedTheme === 'light' : false;

    return validStoredTheme && storedTheme ? storedTheme : prefersDarkMode ? 'dark' : 'light';
  }

  static setRootTheme(theme: string): void {
    const rootElement = document.documentElement;
    if (theme === 'dark') {
      rootElement.setAttribute('data-mode', 'dark');
    } else {
      rootElement.removeAttribute('data-mode');
    }
  }

  static persistTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
