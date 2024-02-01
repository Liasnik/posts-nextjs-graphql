import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { GetPostsEdgesQuery } from '@/generates/gql/graphql'
import Link from 'next/link'

type Props = {
  edge: NonNullable<GetPostsEdgesQuery['posts']>['edges'][number]
}

export default function CardItem({ edge }: Props) {
  return (
    <Card>
      {edge.node.slug && (
        <Link href={`post/${edge?.node.slug}`}>
          <CardHeader>
            <CardTitle>{edge?.node?.title}</CardTitle>
            <CardDescription>
              By {edge?.node?.author?.node.name}{' '}
              {edge.node.date
                ? new Date(edge?.node?.date).toLocaleDateString('uk-Uk')
                : ''}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative h-[320px]">
            {edge.node.featuredImage?.node.sourceUrl && (
              <Image
                src={edge.node.featuredImage?.node.sourceUrl}
                alt={edge.node.featuredImage.node.altText || 'image'}
                fill
                // height={edge.node.featuredImage.node.mediaDetails?.height!}
                // width={edge.node.featuredImage.node.mediaDetails?.width!}
              />
            )}
          </CardContent>
          <CardFooter className="mt-5"></CardFooter>
        </Link>
      )}
    </Card>
  )
}
