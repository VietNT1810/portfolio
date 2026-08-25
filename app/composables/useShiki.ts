import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "vesper"],
      langs: ["javascript"],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(code: string, lang: string) {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "vesper",
    },
    defaultColor: false,
    colorReplacements: {
      "vesper": {
        '#101010': '#000000',
      },
    },
  });
}