import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useLocalStorage } from "@mantine/hooks";

export interface UserType {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const AuthContext = createContext<{
    user: UserType | null;
    signInWithGoogleHandler: () => Promise<void>;
    signOutHandler: () => Promise<void>;
  } | null>({ user: null, signInWithGoogleHandler: async () => {}, signOutHandler: async () => {} });

  
interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useLocalStorage("user", null)//useState<UserType | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const authContextValue = {
    user,
    signInWithGoogleHandler, // Corrected function name
    signOutHandler, // Corrected function name
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext) as {
    user: UserType | null;
    signInWithGoogleHandler: () => Promise<void>;
    signOutHandler: () => Promise<void>;
  };
}
