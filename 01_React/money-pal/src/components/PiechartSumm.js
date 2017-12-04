import React, {Component} from "react"
import PieChart from "react-svg-piechart"

import './PieCharts.css';

export default class PiechartSumm extends Component {
  constructor() {
    super();

    this.state = {
      expandedSector: null,
    };

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
  }

  handleMouseEnterOnSector(sector) {
    this.setState({expandedSector: sector})
  }

  render() {

    const accounts = this.props.data;

    const incomeSumm = (accounts.filter(x => x.amount > 0)).reduce((acc, obj) => {
        return { value: acc.value + obj.amount, label: 'incomes' };
    }, {value: 0});

    const expensesSumm = (accounts.filter(x => x.amount < 0)).reduce((acc, obj) => {
      return { value: acc.value - obj.amount, label: 'expenses' };
    }, {value: 0});

    // console.log(incomeSumm);
    // console.log(expensesSumm);

    const dataSumm = [incomeSumm, expensesSumm];

    // console.log(dataSumm);



    // console.log(data);

    const {expandedSector} = this.state;

    return (
      <div>
        <PieChart
          className = "pie-charts"
          data={ dataSumm }
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={2}
          expandOnHover
          shrinkOnTouchEnd
        />
        <div>
          {
            dataSumm.map((element, i) => (
              <div key={i} >
                {/*<span style={{background: element.color}}></span>*/}
                <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                  {element.label} : {element.value}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

