import api from "@/lib/api"

export const getPosts = async () => {
    return (await api.get("/posts")).data;
};