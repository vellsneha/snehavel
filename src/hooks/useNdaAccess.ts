import { useCallback, useState } from "react";

// SHA-256 of the access password. Stored as a hash so the plaintext is not in source.
const NDA_PASSWORD_HASH =
  import.meta.env.VITE_NDA_ACCESS_PASSWORD_HASH ||
  "5e3f5e195cc777b8fe13cdce559a9d1023a15a00889070b711d8cf3f41f523e5";

async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function useNdaAccess() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const unlock = useCallback(async (password: string) => {
    const expectedHash = NDA_PASSWORD_HASH;
    if (!expectedHash) {
      setError("Access is not configured yet.");
      return false;
    }

    const enteredHash = await sha256Hex(password);
    if (enteredHash !== expectedHash) {
      setError("Incorrect password. Email me if you need access.");
      return false;
    }

    setIsUnlocked(true);
    setError(null);
    return true;
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { isUnlocked, unlock, error, clearError };
}
