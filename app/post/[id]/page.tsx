import { GET } from '@/app/api/revalidate/route'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetPostsDocument } from '@/generates/gql/graphql'
import { client } from '@/lib/requestClient'
import { Metadata } from 'next'

import Image from 'next/image'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id
  const post = await getPost(id)

  return {
    title: post?.title,
  }
}

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
    </Card>
  )
}
