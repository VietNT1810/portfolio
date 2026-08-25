import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import githubLight from "shiki/themes/github-light.mjs";
import vesper from "shiki/themes/vesper.mjs";
import javascript from "shiki/langs/javascript.mjs";

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [githubLight, vesper],
      langs: [javascript],
      engine: createJavaScriptRegexEngine(),
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
      vesper: {
        "#101010": "#000000",
      },
    },
  });
}
