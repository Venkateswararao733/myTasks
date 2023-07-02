import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TagItem from '../tagItem'
import TaskItem from '../taskItem'

import {
  AppContainer,
  ResponsiveContainer,
  MyTasksLeftContainer,
  LeftHE1,
  FormContainer,
  LabelE1,
  InputE1,
  SelectE1,
  OptionE1,
  AddTaskBtn,
  MyTasksRightContainer,
  TagsHE1,
  TagsContainer,
  NoTagsContainer,
  NoTagsPE1,
  InputTagsContainer,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasksPage extends Component {
  state = {
    activeSelectOptionId: tagsList[0].optionId,
    inputTask: '',
    activeTagText: '',
    tasksArray: [],
  }

  onChangeSelectOption = event => {
    this.setState({activeSelectOptionId: event.target.value})
  }

  onChangeInputE1 = event => {
    this.setState({inputTask: event.target.value})
  }

  onSubmitAddTaskBtn = event => {
    event.preventDefault()
    const {activeSelectOptionId, inputTask, tasksArray} = this.state
    const newTag = tagsList.filter(
      eachTag => eachTag.optionId === activeSelectOptionId,
    )
    const newTagText = newTag[0].displayText
    const newTask = {
      id: uuidv4(),
      taskName: inputTask,
      tagText: newTagText,
    }
    this.setState({
      tasksArray: [...tasksArray, newTask],
      activeSelectOptionId: tagsList[0].optionId,
      inputTask: '',
    })
  }

  onClickedTagBtn = tagText => {
    const {activeTagText} = this.state
    if (activeTagText === tagText) {
      this.setState({activeTagText: ''})
    } else {
      this.setState({activeTagText: tagText})
    }
  }

  render() {
    const {
      activeSelectOptionId,
      inputTask,
      activeTagText,
      tasksArray,
    } = this.state
    const filteredTasks = tasksArray.filter(eachTask =>
      eachTask.tagText.includes(activeTagText),
    )
    const noTasksInArray = filteredTasks.length === 0
    const renderEachSelectOption = option => {
      const {optionId, displayText} = option
      return (
        <OptionE1 key={optionId} value={optionId}>
          {displayText}
        </OptionE1>
      )
    }

    return (
      <AppContainer>
        <ResponsiveContainer>
          <MyTasksLeftContainer>
            <LeftHE1>Create a Task!</LeftHE1>
            <FormContainer onSubmit={this.onSubmitAddTaskBtn}>
              <LabelE1 htmlFor="taskInput">Task</LabelE1>
              <InputE1
                id="taskInput"
                type="text"
                onChange={this.onChangeInputE1}
                value={inputTask}
                placeholder="Enter the task here"
              />
              <LabelE1 htmlFor="select">Tags</LabelE1>
              <SelectE1
                id="select"
                value={activeSelectOptionId}
                onChange={this.onChangeSelectOption}
              >
                {tagsList.map(eachOption => renderEachSelectOption(eachOption))}
              </SelectE1>
              <AddTaskBtn type="submit">Add Task</AddTaskBtn>
            </FormContainer>
          </MyTasksLeftContainer>
          <MyTasksRightContainer>
            <TagsHE1>Tags</TagsHE1>
            <TagsContainer>
              {tagsList.map(eachTag => (
                <TagItem
                  key={eachTag.optionId}
                  tagItem={eachTag}
                  activeTagText={activeTagText}
                  onClickedTagBtn={this.onClickedTagBtn}
                />
              ))}
            </TagsContainer>
            <TagsHE1>Tasks</TagsHE1>
            {noTasksInArray ? (
              <NoTagsContainer>
                <NoTagsPE1>No Tasks Added Yet</NoTagsPE1>
              </NoTagsContainer>
            ) : (
              <InputTagsContainer>
                {filteredTasks.map(eachTask => (
                  <TaskItem key={eachTask.id} taskItem={eachTask} />
                ))}
              </InputTagsContainer>
            )}
          </MyTasksRightContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MyTasksPage
