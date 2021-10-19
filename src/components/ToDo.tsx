interface Props {
  isCompleted: boolean
  description: string
  toggleComplete: () => void
}

export const ToDo = ({ isCompleted, toggleComplete, description }: Props) => (
  <li>
    <input type="checkbox" checked={isCompleted} onChange={toggleComplete} />
    <span>{description}</span>
  </li>
)
