import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextType } from "@context/Auth/types";
import { getUserIdFromToken } from "@utils/jwtUtils";
import { LoginResponse, User } from "@api/types";
import axios, { AxiosError } from "axios";
import { Alert } from "react-native";
import { LOGIN, USERS } from "@api/apiEndpoints";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUserData = async (userId: number) => {
        try {
            const response = await axios.get<User>(`${USERS}/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const userData = response.data;

            await AsyncStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);

            return userData;
        } catch (err) {
            console.error("Error fetching user profile:", err);
            return null;
        }
    };

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                setIsLoading(true);
                const storedToken = await AsyncStorage.getItem("userToken");

                if (storedToken) {
                    const userJson = await AsyncStorage.getItem("user");

                    if (userJson) {
                        setUser(JSON.parse(userJson));
                    } else {
                        const userId = getUserIdFromToken(storedToken);

                        if (userId) {
                            await fetchUserData(userId);
                        }
                    }

                    setToken(storedToken);
                }

                setIsLoading(false);
            } catch (err) {
                console.log("Failed to load auth state", err);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync().catch(console.error);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            const response = await axios.post<LoginResponse>(LOGIN, {
                username,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const newToken = response.data.token;

            await AsyncStorage.setItem("userToken", newToken);
            setToken(newToken);
            setError(null);

            const userId = getUserIdFromToken(newToken);

            if (!userId) {
                throw new Error("Invalid token received");
            }

            await fetchUserData(userId);
            setIsLoading(false);
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.response?.data : "Login failed";
            Alert.alert("Error", errorMessage);
            setError(errorMessage);
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("userToken");
            await AsyncStorage.removeItem("user");
            setUser(null);
            setToken(null);
        } catch (err) {
            console.log("Logout error", err);
        }
    };

    const clearError = () => {
        setError(null);
    };

    const authContext: AuthContextType = {
        user,
        token,
        isLoading,
        error,
        login,
        logout,
        clearError,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
