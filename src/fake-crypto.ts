import encryptedData from "./data?raw";
import imgBase64 from "./image.txt?raw";

export type EncryptData = {
  title: string;
  time: string;
  dateTime: string;
  ics: string;
};

function getKey() {
  const shareKey =
    (import.meta.env.VITE_PUBLIC_SHARE_KEY as string) ||
    new URL(window.location.href).searchParams.get("key") ||
    "";
  return shareKey;
}

export function getImg() {
  return imgBase64.replace(getKey(), "");
}

export function encrypt(rawData: unknown) {
  const data = JSON.stringify(rawData);
  const key = getKey();
  const buffer = Array.from(data).map((c) => {
    return c.charCodeAt(0);
  });
  for (let i = 0; i < data.length; i++) {
    buffer[i] += key.charCodeAt(i % key.length);
  }
  return String.fromCharCode(...buffer);
}

function decrypt<T>(data: string): T {
  const key = getKey();
  const buffer = Array.from(data).map((c) => {
    return c.charCodeAt(0);
  });
  for (let i = 0; i < data.length; i++) {
    buffer[i] -= key.charCodeAt(i % key.length);
  }
  try {
    return JSON.parse(String.fromCharCode(...buffer));
  } catch (e) {
    return {} as T;
  }
}

export function getData() {
  return decrypt<EncryptData>(encryptedData);
}
