export function useScrollTo(offset: number = 64) {
  function scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return { scrollToSection, scrollToTop, scrollToBottom };
}
