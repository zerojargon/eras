/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import gtmParts from 'react-google-tag-manager';

const Html = ({ assets, state, content }) => {
  const helmet = Helmet.rewind()
  const gtm = gtmParts({
     id: 'GTM-KDKL7V',
     dataLayerName: 'dataLayer'
   })
  return (
    <html>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {gtm.scriptAsReact()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,600,700,800" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        {Object.keys(assets.styles).map((key) =>
          <link rel="stylesheet" key={key} href={assets.styles[key]} />
        )}
      </head>
      <body>
        {gtm.noScriptAsReact()}
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {Object.keys(assets.javascript).map((key) =>
          <script key={key} src={assets.javascript[key]} />
        )}
      </body>
    </html>
  )
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Html
