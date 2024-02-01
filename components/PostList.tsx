import { GetPostsEdgesDocument } from '@/generates/gql/graphql'
import { client } from '@/lib/requestClient'
import CardItem from './CardItem'

async function getPosts() {
  const { posts } = await client.request(GetPostsEdgesDocument)
  return posts?.edges
}

export default async function PostsList() {
  const edges = await getPosts()

  return (
    <main className="grid grid-cols-3 gap-4">
      {edges?.map((edge) => (
        <div key={edge?.node?.id}>
          <CardItem edge={edge} />
        </div>
      ))}
    </main>
  )
}
