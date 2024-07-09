import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/albums')({
  component: Albums,
})

function Albums() {
  return (
    <div>
      <h1>Albums</h1>
    </div>
  );
}