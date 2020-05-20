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

export async function getVersions(modelId) {
  try {
    const resp = await axios.get(`${baseApiUrl}/version`, {
      params: {
        ModelID: modelId,
      },
    });

    return resp.data;
  } catch (e) {
    console.log(e);
  }
}
