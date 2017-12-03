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

    const incomeAccounts = accounts.filter(x => x.amount > 0);
    const expensesAccounts = accounts.filter(x => x.amount < 0);

    // const reducedIncomeAccounts = incomeAccounts.reduce((acc, item) => {
    //   acc.value = item.amount += item.amount;
    //   let sum =
    //   acc = {
    //     value: item.amount
    //   };
    //   console.log(acc);
    //   return acc;
    //
    // }, []);
    // console.log(reducedIncomeAccounts);

    // const reducedIncomeAccounts = incomeAccounts.reduce((prev, curr) => {
    //   prev += curr.amount;
    //   return prev;
    // }, []);


    // const reducedIncomeAccounts = incomeAccounts.reduce((acc, obj) => {
    //   return acc + obj.amount;
    // }, 0);


    // const reducedIncomeAccounts = incomeAccounts.reduce((acc, obj) => {
    //   return {
    //     value: acc.value + obj.amount
    //   }
    // }, {value: 0});

    const reducedIncomeAccounts = incomeAccounts.reduce((acc, obj) => {
      if (obj.amount > 0) {
        return { value: acc.value + obj.amount, label: 'incomes' };
      }
    }, {value: 0});

    console.log(reducedIncomeAccounts);



    const reducedAccountsArr = accounts.reduce((acc, item) => {
      let accByCategory = acc.find(x => x.category === item.category);
      if(accByCategory) {
        accByCategory.amount += item.amount;
      } else {
        acc.push({
          amount: item.amount,
          category: item.category
        });
      }
      return acc;
    }, []);

    const data1 = incomeAccounts.map((obj) => {
      obj.value = obj.amount; //the name of thw column must be 'value' for plugin
      return obj;
    });

    const data2 = expensesAccounts.map((obj) => {
      obj.value = obj.amount; //the name of thw column must be 'value' for plugin
      return obj;
    });




    // console.log(data);

    const {expandedSector} = this.state;

    return (
      <div>
        <PieChart
          className = "pie-charts"
          data={ data1 }
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={2}
          expandOnHover
          shrinkOnTouchEnd
        />
        {/*<div>*/}
          {/*{*/}
            {/*data.map((element, i) => (*/}
              {/*<div key={i} >*/}
                {/*/!*<span style={{background: element.color}}></span>*!/*/}
                {/*<span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>*/}
                  {/*{element.category} : {element.amount}*/}
                {/*</span>*/}
              {/*</div>*/}
            {/*))*/}
          {/*}*/}
        {/*</div>*/}


        <PieChart
          className = "pie-charts"
          data={ data2 }
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={2}
          expandOnHover
          shrinkOnTouchEnd
        />
      </div>
    )
  }
}

