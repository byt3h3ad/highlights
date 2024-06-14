import { TweetSkeleton } from "react-tweet";
import { Post } from "@/components/post";
import { TWEETS } from "@/constants";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Feed</h1>
      {TWEETS.map((data, idx) => (
        <Suspense key={idx} fallback={<TweetSkeleton />}>
          <Post id={data.id} />
        </Suspense>
      ))}
    </main>
  );
}
