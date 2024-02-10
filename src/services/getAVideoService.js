import * as httpRequest from '~/utils/httpRequest';

const getAVideo = async (id, token) => {
    try {
        const res = await httpRequest.get(`videos/${id}`, {
            headers: {
                Authorization: token,
            },
        });

        return res.data;
    } catch (error) {
        console.log('errorGet A Video: ', error);
    }
};

export default getAVideo;
