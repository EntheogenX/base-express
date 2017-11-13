const React = require('react');
module.exports = class extends React.PureComponent {
  render() {
    const {title} = this.props;
      return <html>
        <head>
          <title>{title}</title>
          <link rel='stylesheet' href='/stylesheets/style.css'/>
        </head>
        <body>
          <h1>{title}</h1>
          <p>Welcome to React: {React.version}</p>
        </body>
      </html>
  }
};