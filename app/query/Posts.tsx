"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./page";

const Posts = ({ posts }: any) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: posts,
  });
  //   console.log(data);
  console.log(error);
  if (isLoading) return <div>Loading...</div>;

  //   if (error instanceof Error) {
  //     return <div>{error.message}</div>;
  //   }
  console.log(data.value);
  return (
    <div>
      {data?.value?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Posts;
