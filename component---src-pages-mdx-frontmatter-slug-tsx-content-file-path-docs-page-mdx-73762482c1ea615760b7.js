"use strict";(self.webpackChunkshanghaitech_igem_wiki=self.webpackChunkshanghaitech_igem_wiki||[]).push([[716],{9955:function(e,t,n){n.r(t),n.d(t,{Head:function(){return j},default:function(){return q}});var a=n(5658),l=n(758);function s(e){const t=Object.assign({section:"section",h1:"h1",a:"a",span:"span",p:"p",div:"div",ol:"ol",li:"li",strong:"strong",h2:"h2",ul:"ul"},(0,a.R)(),e.components);return l.createElement(t.section,null,l.createElement(t.h1,{id:"file-structure",style:{position:"relative"}},l.createElement(t.a,{href:"#file-structure","aria-label":"file structure permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"File Structure"),l.createElement(t.p,null,"As you can see in the Explorer of the VSCode, the project is basically structured like this:"),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`.\n├── LICENSE\n├── README.md\n├── archive/\n├── contents/\n├── data/\n├── docs/\n├── gatsby-browser.tsx\n├── gatsby-config.mjs\n├── gatsby-node.ts\n├── lib/\n├── node_modules/\n├── package.json\n├── pnpm-lock.yaml\n├── postcss.config.mjs\n├── public/\n├── server/\n├── src/\n├── test/\n└── tsconfig.json`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">.\n├── LICENSE\n├── README.md\n├── archive/\n├── contents/\n├── data/\n├── docs/\n├── gatsby-browser.tsx\n├── gatsby-config.mjs\n├── gatsby-node.ts\n├── lib/\n├── node_modules/\n├── package.json\n├── pnpm-lock.yaml\n├── postcss.config.mjs\n├── public/\n├── server/\n├── src/\n├── test/\n└── tsconfig.json</code></pre></div>'}})),l.createElement(t.p,null,"The ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">contents/</code>'}})," folder contains all the MDX files that will be rendered into pages.\nThus if you want to create a new page, you should create a new MDX file in the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">contents/</code>'}})," folder."),l.createElement(t.h1,{id:"page-creation",style:{position:"relative"}},l.createElement(t.a,{href:"#page-creation","aria-label":"page creation permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Page Creation"),l.createElement(t.p,null,"Take a closer look at the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">contents/</code>'}})," folder, you will see that there are already some MDX files in it."),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`contents/\n├── 0-project\n│   ├── 0-description.mdx\n│   ├── 1-design.mdx\n│   ├── 2-contribution.mdx\n│   ├── 3-P.O.C..mdx\n│   └── 4-implementation.mdx\n├── 1-wet-lab\n│   ├── 0-engineering.mdx\n│   ├── 1-results.mdx\n│   ├── 2-parts.mdx\n│   ├── 3-protocol.mdx\n│   └── 4-notebook.mdx\n├── 2-dry-lab\n│   ├── 0-model.mdx\n│   └── 1-hardware.mdx\n├── 3-human-practices.mdx\n├── 4-education.mdx\n├── 5-safety.mdx\n└── 6-attributions.mdx`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">contents/\n├── 0-project\n│   ├── 0-description.mdx\n│   ├── 1-design.mdx\n│   ├── 2-contribution.mdx\n│   ├── 3-P.O.C..mdx\n│   └── 4-implementation.mdx\n├── 1-wet-lab\n│   ├── 0-engineering.mdx\n│   ├── 1-results.mdx\n│   ├── 2-parts.mdx\n│   ├── 3-protocol.mdx\n│   └── 4-notebook.mdx\n├── 2-dry-lab\n│   ├── 0-model.mdx\n│   └── 1-hardware.mdx\n├── 3-human-practices.mdx\n├── 4-education.mdx\n├── 5-safety.mdx\n└── 6-attributions.mdx</code></pre></div>'}})),l.createElement(t.p,null,"Noticed that the MDX files are named in a certain pattern?\nIndeed, the naming pattern is important, as it will determine the order of the pages in the navigation.\nFor example, the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">3-human-practices.mdx</code>'}})," will be the 4th item in the navigation."),l.createElement(t.p,null,"Also, you might have noticed that some of the MDX files are in subfolders.\nThis is because the subfolders will be rendered as a dropdown menu in the navigation."),l.createElement(t.p,null,"In conclusion, the prefix number determines the order of the navigation items, and the folder structure determines the dropdown menu structure."),l.createElement(t.p,null,"Also, the rendered name of the page in the navigation, will be converted following rules:"),l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"The number prefix will be removed."),"\n",l.createElement(t.li,null,"The hyphens will be replaced by spaces."),"\n",l.createElement(t.li,null,"The letters will be capitalized according to the hyphens."),"\n",l.createElement(t.li,null,"If the letter in file name is capitalized, it will be kept capitalized."),"\n"),l.createElement(t.p,null,"Now, you can try to create a new MDX file in the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">contents/0-project/</code>'}})," folder called ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">5-test-page.mdx</code>'}}),", and writing:"),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`---\ntitle: &quot;Test Page&quot;\nslug: &quot;test-page&quot;\n---\n\n# This is a test page\n\nTest test test.\n`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="mdx"><pre class="language-mdx"><code class="language-mdx">---\ntitle: &quot;Test Page&quot;\nslug: &quot;test-page&quot;\n---\n\n# This is a test page\n\nTest test test.\n</code></pre></div>'}})),l.createElement(t.p,null,"Then you can run the project by:"),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`pnpm run develop`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="command-line-prompt"><span data-user=user data-host=localhost></span></span><span class="token function">pnpm</span> run develop</code></pre></div>'}})),l.createElement(t.p,null,"Finally, open your browser to ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000/test-page</code>'}})," to see the new page, and it should be the last item in the navigation’s dropdown menu of the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Project</code>'}})," item."),l.createElement(t.p,null,l.createElement(t.strong,null,"Note Remember, if any new MDX file is created, you should restart the project to see the changes.")),l.createElement(t.h1,{id:"frontmatter",style:{position:"relative"}},l.createElement(t.a,{href:"#frontmatter","aria-label":"frontmatter permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Frontmatter"),l.createElement(t.h2,{id:"overview",style:{position:"relative"}},l.createElement(t.a,{href:"#overview","aria-label":"overview permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Overview"),l.createElement(t.p,null,"Frontmatter is pretty much just a configuration block for the page, at the beginning of your MDX file."),l.createElement(t.p,null,"Like this:"),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`---\ntitle: &quot;Title&quot;\nfavicon: &quot;path/to/favicon&quot;\nslug: &quot;path/to/page&quot;\n---`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml"><span class="token punctuation">---</span>\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"Title"</span>\n<span class="token key atrule">favicon</span><span class="token punctuation">:</span> <span class="token string">"path/to/favicon"</span>\n<span class="token key atrule">slug</span><span class="token punctuation">:</span> <span class="token string">"path/to/page"</span>\n<span class="token punctuation">---</span></code></pre></div>'}})),l.createElement(t.p,null,"Currently, the following frontmatter fields are supported:"),l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">title</code>'}}),": The big title on the top of the page."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">slug</code>'}}),": The URL path of the page."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">favicon</code>'}})," (optional) : The favicon of the page, which will be shown in the browser tab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">tracer</code>'}})," (optional) : The cursor tracer of the page, which will following user’s cursor."),"\n"),"\n"),l.createElement(t.h2,{id:"an-example-of-frontmatter",style:{position:"relative"}},l.createElement(t.a,{href:"#an-example-of-frontmatter","aria-label":"an example of frontmatter permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"An Example of Frontmatter"),l.createElement(t.p,null,"The frontmatter of the current page is:"),l.createElement(t.div,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="copy-button-container">\n              <button\n                class="copy-button"\n                onClick="copyToClipboard(`---\ntitle: &quot;Page Creation&quot;\nslug: &quot;docs/page-creation&quot;\n---`, this)"\n              >\n                <svg class="copy-icon" height="16" viewBox="0 0 16 16" width="16">\n                          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>\n                          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>\n                        </svg><svg class="success-icon" height="16" viewBox="0 0 16 16" width="16">\n                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>\n                           </svg>\n              </button>\n            </div>'}}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml"><span class="token punctuation">---</span>\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"Page Creation"</span>\n<span class="token key atrule">slug</span><span class="token punctuation">:</span> <span class="token string">"docs/page-creation"</span>\n<span class="token punctuation">---</span></code></pre></div>'}})),l.createElement(t.p,null,l.createElement(t.strong,null,"Note: Remember to restart the project after changing the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">slug</code>'}})," filed of any MDX file.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)},c=n(3488),r=n(6070),i=n(9002),h=n(2362),d=n(6223),p=n(2376),u=n(218),m=n(2298),g=n(7895),v=n(2293),f=n(1926),y=n(6581),b=n(1511),E=n(6966),x=n(7590),w=n(6189),M=n(6454),_=n(9251),T=n(1506),k=n(6926);const C={img:d.A,Video:r.A,PDF:i.A,Audio:h.A,Image:d.A,Gallery:p.A,Modal:u.A,Plot:m.A,Model:g.A,Collapse:v.A,Tabs:f.tU,Tab:f.oz,Profile:y.A,Link:c.N_,BreakCell:b.A},{DD:S,Qs:A,RM:L,jZ:H,MY:I}=T,Z=e=>{let{data:t,children:n}=e;l.useEffect((()=>{const e=document.querySelector("#footnote-label");return e&&(e.textContent="References"),document.addEventListener("copy",k.A),()=>{document.removeEventListener("copy",k.A)}}),[]);const{frontmatter:s}=t.mdx;return l.createElement(E.A,{cursor:s.cursor},s.tracer&&l.createElement(M.A,{src:s.tracer,alt:"Tracer Image"}),l.createElement("div",{className:I},l.createElement("header",{className:S},s.title),l.createElement("div",{className:A},l.createElement(_.A,{className:L,tableOfContents:t.mdx.tableOfContents}),l.createElement("article",{className:H},l.createElement(a.x,{components:C},n)))))},j=e=>{let{data:t}=e;return l.createElement(l.Fragment,null,l.createElement(x.A,{title:t.mdx.frontmatter.title}),l.createElement(w.A,{pageFavicon:t.mdx.frontmatter.favicon}))};function q(e){return l.createElement(Z,e,l.createElement(o,e))}}}]);