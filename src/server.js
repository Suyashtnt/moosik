import './styles/index.css';

import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const url = !dev ? 'moosik' : '/';

polka()
	.use(
		url,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({}),
		})
	)
	.listen(PORT, (err) => {
		if (err) console.log('error', err);
	});
