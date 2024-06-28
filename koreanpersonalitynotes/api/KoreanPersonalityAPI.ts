import axios from 'axios';

const RandomKoreanPersonality = async (): Promise<string | null> => {
  try {
    const res = await axios.get(
      'https://korean-personality-api.vercel.app/api/personality',
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default RandomKoreanPersonality;
