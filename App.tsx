import React from "react";
import Navigation from "@navigation/index";
import { AuthProvider } from "@context/Auth/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Navigation/>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
