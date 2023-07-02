import {TagItemE1, TagBtn} from './styledComponents'

const TagItem = props => {
  const {tagItem, activeTagText, onClickedTagBtn} = props
  const {displayText} = tagItem
  const isActive = activeTagText === displayText
  const onClickTagBtn = () => {
    onClickedTagBtn(displayText)
  }
  return (
    <TagItemE1>
      <TagBtn type="button" onClick={onClickTagBtn} isActive={isActive}>
        {displayText}
      </TagBtn>
    </TagItemE1>
  )
}

export default TagItem
