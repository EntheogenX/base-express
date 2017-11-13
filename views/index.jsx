const React = require('react');
module.exports = class extends React.PureComponent {
  render() {
    const {title} = this.props;
      return <html>
        <head>
          <title>{title}</title>
          <link rel='stylesheet' href='/stylesheets/style.css'/>
          <script src="/javascripts/main.js/main.js" defer />
        </head>
        <body>
          <div id="app" />
        </body>
      </html>
  }
};