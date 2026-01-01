import { useEffect } from 'react';

/**
 * StructuredData Component
 * Injects JSON-LD structured data into the page head for better SEO
 * Uses direct DOM manipulation to avoid dependency issues with React 19
 * 
 * @param {Object|Array} schema - Schema.org structured data object(s)
 */
const StructuredData = ({ schema }) => {
    useEffect(() => {
        // Handle both single schema object and array of schemas
        const schemas = Array.isArray(schema) ? schema : [schema];
        const scriptElements = [];

        // Create and inject script tags for each schema
        schemas.forEach((schemaItem, index) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = `structured-data-${index}`;
            script.textContent = JSON.stringify(schemaItem);
            document.head.appendChild(script);
            scriptElements.push(script);
        });

        // Cleanup function to remove scripts when component unmounts
        return () => {
            scriptElements.forEach(script => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
        };
    }, [schema]);

    // This component doesn't render anything visible
    return null;
};

export default StructuredData;
