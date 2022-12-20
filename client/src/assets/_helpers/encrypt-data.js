import crypto from "crypto-js";

function encryptData(data, key) {
	const { AES, mode, pad } = crypto;

	const encryptedData = AES.encrypt(JSON.stringify(data), key, {
        keySize: 128 / 8,
        iv: key,
        mode: mode.CBC,
        padding: pad.Pkcs7
  	}).toString();

	return encryptedData;
}

export default encryptData;