const html = ({ body, styles, title }) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            ${styles}
            <script src="client.js" defer></script>
        </head>
    <body style="margin: 0;">
        <div id="app">${body}</div>
    </body>
</html>
`;

export default html;
