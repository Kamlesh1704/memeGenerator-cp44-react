import {Component} from 'react'
import {CustomDiv, CustomPara} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isVisible: false,
  }

  onImg = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTop = event => {
    this.setState({topText: event.target.value})
  }

  onBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onFont = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerate = () => {
    this.setState({isVisible: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isVisible} = this.state
    return (
      <div>
        <form>
          <h1>Meme Generator</h1>
          <label htmlFor="url" className="lable">
            Image URL
          </label>
          <input id="url" className="input" onChange={this.onImg} />
          <label htmlFor="top" className="lable">
            Top Text
          </label>
          <input id="top" className="input" onChange={this.onTop} />
          <label htmlFor="bottom" className="lable">
            Bottom Text
          </label>
          <input id="bottom" className="input" onChange={this.onBottom} />
          <label htmlFor="select" className="lable">
            Font Size
          </label>
          <select id="select" onChange={this.onFont} value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
        </form>
        <div>
          {isVisible === true && (
            <CustomDiv
              imageUrl={imageUrl}
              fontSize={fontSize}
              data-testid="meme"
            >
              <CustomPara fontSize={fontSize}>{topText}</CustomPara>
              <CustomPara fontSize={fontSize}>{bottomText}</CustomPara>
            </CustomDiv>
          )}
        </div>
        <p>Hello</p>
      </div>
    )
  }
}
export default MemeGenerator
