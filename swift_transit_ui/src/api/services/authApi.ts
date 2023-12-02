import { axiosDefaultInstance } from "../axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export interface AuthCredentials {
    username: string;
    password: string;
    email: string;
    companyName: string;
    companyAddress: string;
    industry: string;
    employeeCount: number;
    contactPersonName: string;
    contactEmail: string;
    phoneNumber: string;
    subdomain: string;
}

export const register = async (data: AuthCredentials): Promise<void> => {
    await axiosDefaultInstance.post("/api/users/register/", data);
};

export const useSignUpMutation = (
    options?: UseMutationOptions<void, any, AuthCredentials>
) => {
    return useMutation<void, any, AuthCredentials>(register, options);
};

export const login = async (data: AuthCredentials): Promise<void> => {
    await axiosDefaultInstance.post("/auth/login", data);
};

export const useLoginMutation = (
    options?: UseMutationOptions<void, any, AuthCredentials>
) => {
    return useMutation<void, any, AuthCredentials>(login, options);
};
