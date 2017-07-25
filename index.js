const React = require('react')
const ReactDOM = require('react-dom')
const {Line} = require("react-chartjs")
const {$} = require("jquery")

var myArray =  ['Apple', 'Banana','Apple', 'Banana', 'Apple', 'Banana','Apple', 'Banana'];
var myArray2 = [1,5,3,4,5,3,4,5];

var data=  {
                labels: myArray,
                datasets: [{               
                    label: 'STOCK HISTORY',
                    fill: false,
                    data: myArray2
                }],
            }

const options = {
                elements: {
                    line: {
                        tension: 0, 
                    }
                }      
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="ENTER SYMBOL" />        
      </form>      
    );
  }
}

class Init extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div >
         <SearchBar/>         
        </div>     
        <br/><br/><br/>
        <div> <Line type='line' data={data} options={options}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Init/>, document.getElementById("root"));

  