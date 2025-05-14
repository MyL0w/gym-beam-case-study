import { User } from "@api/types";

export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    initialize: boolean;
}

export interface AuthContextType extends AuthState {
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}
