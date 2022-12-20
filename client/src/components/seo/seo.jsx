import React from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_NAME } from '../../config';

// <meta property="og:url"content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
//             <meta property="og:type" content="article" />
//             <meta property="og:title" content="When Great Minds Don’t Think Alike" />
//             <meta property="og:description" content="How much does culture influence creative thinking?" />
//             <meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />

function SEO({ title, description, type, url, image }) {
	return (
		<Helmet>
			{ /* Standard metadata tags */ }
			<title>{title}</title>
			<meta name='description' content={description} />
			{ /* End standard metadata tags */ }

			{ /* Facebook tags */ }
			<meta property="og:url"content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{ /* End Facebook tags */ }

			{ /* Twitter tags */ }
			<meta name="twitter:creator" content={APP_NAME} />}
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{ /* End Twitter tags */ }
		</Helmet>
	)
}

export default SEO;