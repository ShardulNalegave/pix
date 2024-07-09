import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  component: People,
})

function People() {
  return (
    <div>
      <h1>People</h1>
    </div>
  );
}