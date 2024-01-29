import PostsList from '@/components/PostList'

export default async function Home() {
  return (
    <main className="flex min-h-screen justify-center gap-5 p-24">
      <PostsList />
    </main>
  )
}
