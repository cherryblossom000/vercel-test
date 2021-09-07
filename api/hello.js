import 'node-fetch';
export default async (request, response) => {
    const { name = 'World' } = request.query;
    response.status(200).send(`Hello1 ${name}!`);
};
