import React from 'react';
import { 
    apiMethods, 
    apiServiceOptionList, 
    apiAddOrder, 
    apiOrderOptionList,
    apiMultipleOrderOptionList,
    apiCreateRefillOptionList,
    apiCreateRefillStatusOptionList,
    apiUserBalanceOptionList
} from '../../../constants/api';
import { ApiDescriptionBox, ApiOptionBox, SEO, CodeBlock, Footer } from '../../../components';
import { APIContainer, APIDescriptionWrapper, APIDescriptionResponseContainer } from './api.styles';

function Api() {
    const { selectOrderOptions, addOrderOptions } = apiAddOrder;
    return (
        <>
            {/* SEO */}
            <SEO
                title="API"
                description="API"
                type="article"
            />

            <APIContainer>
                {/* Api Description Box */}
                <APIDescriptionWrapper className="d-flex d-flex-column">
                    <h2 className="heading-2">API</h2>

                    <APIDescriptionResponseContainer className="d-flex d-flex-column">
                        {apiMethods.map(method => (<ApiDescriptionBox key={method.method} {...method} />))}
                    </APIDescriptionResponseContainer>
                </APIDescriptionWrapper>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Services List" 
                    data={apiServiceOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    <span className="code-rd nl">{"{"}</span>
                    <div role="code-group" className="nl">
                        <span className="pl code-bl">status</span>
                        <span className="pr">:</span>
                        <span>true</span>
                        <span>,</span>
                    </div>

                    <div role="code-group" className="nl">
                        <span className="pl code-bl nl">order</span>
                        <span className="pr font-bold">:</span>
                        <span>"mass"</span>
                        <span>,</span>
                    </div>

                    <div role="code-group" className="nl">
                        <span className="pl code-bl">quantity</span>
                        <span className="pr">:</span>
                        <span>20</span>
                        <span>,</span>
                    </div>
                    <span className="code-rd nl">{"}"}</span>
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Add order" 
                    selectData={selectOrderOptions}
                    data={addOrderOptions}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Order status"
                    data={apiOrderOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Multiple Order status"
                    data={apiMultipleOrderOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Create Refill"
                    data={apiCreateRefillOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Create Refill Status"
                    data={apiCreateRefillStatusOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="User Balance"
                    data={apiUserBalanceOptionList}
                />
            </APIContainer>
        
            {/* Footer */}
            <Footer />
        </>   
    )
}

export default Api;