import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetPostsDocument } from '@/generates/gql/graphql'
import { client } from '@/lib/requestClient'
import Image from 'next/image'

async function getPost(id: string) {
  const { post } = await client.request(GetPostsDocument, { id })
  return post
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const post = await getPost(id)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
        <CardDescription>
          By {post?.author?.node.name}{' '}
          {post?.date ? new Date(post?.date).toLocaleDateString('uk-Uk') : ''}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative ">
        {post?.featuredImage?.node.sourceUrl && (
          <Image
            src={post.featuredImage?.node.sourceUrl}
            alt={post.featuredImage.node.altText || 'image'}
            // fill
            height={post.featuredImage.node.mediaDetails?.height!}
            width={post.featuredImage.node.mediaDetails?.width!}
          />
        )}
      </CardContent>
      <CardFooter className="mt-5"></CardFooter>
    </Card>
  )
}
