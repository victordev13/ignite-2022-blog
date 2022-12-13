import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import './styles.css'

export const MarkdownInterpreter = ({ children }: { children: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    className="mdapp"
    components={{
      code({ node, inline, className, children: tchildren, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return (
          <SyntaxHighlighter
            language={match ? match[1] : ''}
            // @ts-ignore
            style={atomOneDark}
            PreTag="section"
            {...props}
          >
            {String(tchildren).replace(/\n$/, '')}
          </SyntaxHighlighter>
        )
      },
    }}
  >
    {children}
  </ReactMarkdown>
)
