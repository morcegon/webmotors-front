const baseApiUrl = "http://desafioonline.webmotors.com.br/api/OnlineChallenge";

export async function getMakes() {
  try {
    const resp = await fetch(`${baseApiUrl}/make`, { method: "GET" });
    return resp.json();
  } catch (e) {}
}
