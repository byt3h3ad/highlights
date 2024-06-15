import { Suspense } from "react";
import { TweetSkeleton } from "react-tweet";
import { Post } from "@/components/post";
import { TWEETS } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl">Feed</h1>
      {TWEETS.map((data, idx) => (
        <Suspense key={idx} fallback={<TweetSkeleton />}>
          <Post id={data.id} />
        </Suspense>
      ))}
    </main>
  );
}
