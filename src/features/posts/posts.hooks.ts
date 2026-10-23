import {useQuery} from "@tanstack/react-query";
import { getPosts } from "./posts.api";

export const useGetPosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn:() => getPosts(),
    });
}
