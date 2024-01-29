import { GetPostsEdgesDocument } from '@/generates/gql/graphql'
import { client } from '@/lib/requestClient'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

async function getPosts() {
  const { posts } = await client.request(GetPostsEdgesDocument)
  return posts?.edges
}

export default async function PostsList() {
  const edges = await getPosts()
  return (
    <main className="flex min-h-screen justify-center gap-5 p-24">
      {edges?.map((edge) => (
        <div key={edge?.node?.id}>
          <Card>
            <CardHeader>
              <CardTitle>{edge?.node?.title}</CardTitle>
              <CardDescription>
                By {edge?.node?.author?.node.name}
              </CardDescription>
              <CardDescription>{edge?.node?.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Footer</p>
            </CardFooter>
          </Card>
          <h5> </h5>
        </div>
      ))}
    </main>
  )
}
