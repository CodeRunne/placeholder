import crypto from "crypto-js";

function decryptData(data, key) {
	const { AES, enc } = crypto;

	const decryptedData = AES.decrypt(data, key).toString(enc.Utf8);

	return JSON.parse(decryptedData);
}

export default decryptData;