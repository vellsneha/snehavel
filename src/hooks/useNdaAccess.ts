import { useCallback, useState } from "react";

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
    const expectedHash = import.meta.env.VITE_NDA_ACCESS_PASSWORD_HASH ?? "";
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
