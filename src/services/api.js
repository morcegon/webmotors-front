import axios from "axios";
const baseApiUrl = "http://desafioonline.webmotors.com.br/api/OnlineChallenge";

export async function getMakes() {
  try {
    const resp = await axios.get(`${baseApiUrl}/make`);
    return resp.data;
  } catch (e) {}
}

export async function getModels(makeId) {
  try {
    const resp = await axios.get(`${baseApiUrl}/model`, {
      params: {
        MakeID: makeId,
      },
    });
    return resp.data;
  } catch (e) {}
}
