import React from 'react';
import {Pie} from 'react-pathjs-chart';



export default function PieChart (accounts) {
  const options = {
    margin: {top: 20, left: 20, right: 20, bottom: 20},
    width: 600,
    height: 600,
    color: '#2980B9',
    r: 100,
    R: 200,
    legendPosition: 'topLeft',
    animate:{
      type:'oneByOne',
      duration:200,
      fillTransition:3
    },
    label:{
      fontFamily:'Arial',
      fontSize:14,
      fontWeight:true,
      color:'#ECF0F1'
    }
  };

  let data = accounts.accounts.reduce((acc, item) => {
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


  console.log(data);
  return (
    <Pie data={data} options={options} accessorKey="amount"  />
  )
}
