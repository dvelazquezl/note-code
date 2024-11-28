import { get, ref, set } from "firebase/database";
import { db } from "./firebase";

export const saveCodeSnippet = async (
  uuid: string,
  code: string,
  language: string
): Promise<string | null> => {
  try {
    const snippetRef = ref(db, `snippets/${uuid}`);
    await set(snippetRef, { code, language });
    return uuid;
  } catch (error) {
    console.error("Error saving snippet: ", error);
    return null;
  }
};

export const getCode = async (
  uuid: string
): Promise<{ uuid: string; code: string; language: string } | null> => {
  try {
    const snippetRef = ref(db, `snippets/${uuid}`);
    const snapshot = await get(snippetRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error("Error getting code: ", error);
    return null;
  }
};
