import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase', 'success');
  };

  const handleLoClick = () => {
    console.log('Lowercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase', 'success');
  };

  const handleClearClick = () => {
    console.log('Text clear was clicked' + text);
    let newText = '';
    setText(newText);
    props.showAlert('clear text', 'success');
  };

  const handleCopyClick = () => {
    console.log('I am copy');
    var textElement = document.getElementById('myBox');
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    document.getSelection().removeAllRanges();
    props.showAlert('copied to cliptext', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert(' extra spaces removes', 'success');
  };

  const handleOnChange = (event) => {
    console.log('onchange');
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'black ' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Details</h1>
        <p>
          {text.split(" ").filter(element=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  mode: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};
