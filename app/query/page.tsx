import Posts from "./Posts";

interface HeroData {
  id: number | string;
  name: string;
}
export const getPosts = async (): Promise<HeroData[]> => {
  const response = await fetch("http://localhost:4000/superheros");
  const data = await response.json();
  return data;
};

const QueryPage = async () => {
  const initialData = getPosts();

  return (
    <div>
      <Posts posts={initialData} />
    </div>
  );
};

export default QueryPage;
