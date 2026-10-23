import { Button } from "@/components/ui/button"
import PostList from "@/features/posts/components/postList"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <PostList /> 
    </div>
  )
}

export default App