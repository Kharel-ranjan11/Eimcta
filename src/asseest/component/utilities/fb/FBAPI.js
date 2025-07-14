import axios from 'axios';
const userAccessToken = 'EAAIZBGlAF0MsBPAMANimY4hzojcpQAQO4w2r3ef7uunM2bZB5XUKSA0ZCRRIRDkEkpsZBLSUMDezIZAdzYAdpzcRiFa8UeGH9GijVGxEAEnphheiS43V1LukV9x3aYB4cIheYPOVSZAPZCHHvxoR3ivIAhJRcBeig9kLLU7iqoZBn2Dk68ZAXnR4h4jVKqzIfluyoKoOhxKZAhuNFjQqWvMkuyQggU3N6S6LZAu'
 const getUserPages = async () => {
    try {
        const { data } = await axios.get('https://graph.facebook.com/v19.0/me/accounts', {
            params: { access_token: userAccessToken },
        });
        return data;
    } catch (err) {
        console.error("Error fetching pages:", err.response?.data || err.message,err.code);
        throw err;
    }
};
export default getUserPages;