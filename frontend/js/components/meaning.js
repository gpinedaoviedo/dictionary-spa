export function createDefinitionsItem(definitionData){    
    const $li = document.createElement("LI");
    $li.classList.add("def-li");
    
    const $container = document.createElement("DIV");
    $container.classList.add("definitions-container");
    
    const $definition = document.createElement("P");
    $definition.classList.add("definition");
    $definition.textContent = definitionData.definition;

    $container.appendChild($definition);
        
    if (definitionData.example) {
        
        const $example = document.createElement("P");
        $example.classList.add("word-example");   

        $example.append("Example: "); 
            
        const $span = document.createElement("SPAN");
        $span.textContent = `"${definitionData.example}"`;

        $example.appendChild($span);
        $container.appendChild($example);
    }
    $li.appendChild($container);
    return $li
}

export function createTermsItem(terms) {
    const fragment = document.createDocumentFragment();

    for (const term of terms){
        const link = document.createElement("a");
        link.classList.add("term-link");
        link.href = "#";
        link.textContent = term;

        fragment.append(link);
    }
    return fragment;
}