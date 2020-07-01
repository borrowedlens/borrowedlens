const html = ({ body, styles, title }) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta
            name="description"
            content="website created by Vivek Prasad - A React Developer as a profile page that is being server side rendered by using Express.js"
            />
            <title>${title}</title>
            ${styles}
            <script src="bundle.js" defer></script>
        </head>
    <body style="margin: 0;">
        <div id="app">${body}</div>
    </body>
</html>
`;

export default html;
