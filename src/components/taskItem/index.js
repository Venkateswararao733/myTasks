import {
  TaskItemContainer,
  TaskName,
  TagItemContainer,
  TagE1,
} from './styledComponents'

const TaskItem = props => {
  const {taskItem} = props
  const {taskName, tagText} = taskItem
  return (
    <TaskItemContainer>
      <TaskName>{taskName}</TaskName>
      <TagItemContainer>
        <TagE1>{tagText}</TagE1>
      </TagItemContainer>
    </TaskItemContainer>
  )
}

export default TaskItem
