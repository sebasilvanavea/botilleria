import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  isAuthInitialized: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  setAuthInitialized: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isAuthInitialized: false,
      user: null,
      setUser: (user) => set({ isAuthenticated: !!user, user }),
      logout: () => set({ isAuthenticated: false, user: null }),
      setAuthInitialized: () => set({ isAuthInitialized: true }),
    }),
    {
      name: 'auth-storage',
    }
  )
);