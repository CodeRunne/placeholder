import React from 'react';
import { CodeBlockHeader, CodeBlockPre } from './code-block.styles';

function CodeBlock({ children }) {
	return (
		<blockquote>
			<CodeBlockHeader>Example response</CodeBlockHeader>

			<CodeBlockPre>
				{children}
			</CodeBlockPre>
		</blockquote>
	)
}

export default CodeBlock;