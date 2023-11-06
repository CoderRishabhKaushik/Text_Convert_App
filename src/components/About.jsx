import PropTypes from 'prop-types';
export default function About(props) {

   
    let myStyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode =='dark'?'black':'white'
    }
  return (
   <div className="container" style={myStyle}>
    <h1 className= "my-3" >About Us</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
              <div className="accordion-item">
                  <h2 className="accordion-header">
                      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyze your text</strong>
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body" style={myStyle}>
                          Text Convert App gives you a way to analyze your text quickly and efficiently.Be it word count, character count.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use</strong>
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body" style={myStyle}>
                          Text Convert App is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters.that it is suitable for writing text with word/character limit.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         <strong> Browser compatible </strong>
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body" style={myStyle}>
                         This word counter software works in any web browsers such as chrome, firefox, Internet Explorer,Safari,Opera.It suits to count characters in facebook, blog, books,excel document, pdf documents, essays, etc.
                      </div>
                  </div>
              </div>
          </div>
   </div>
  )
}
About.propTypes = {
  mode: PropTypes.string.isRequired,
};

