import { unstable_cache } from 'next/cache'
import { EmbeddedTweet, TweetNotFound } from 'react-tweet'
import { getTweet } from 'react-tweet/api'
 
const fetchTweet = unstable_cache(
  async (id: string) => getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 }
)
 
export const Post = async ({ id }: { id: string }) => {
  try {
    const tweet = await fetchTweet(id)
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />
  } catch (error) {
    console.error(error)
    return <TweetNotFound error={error} />
  }
}