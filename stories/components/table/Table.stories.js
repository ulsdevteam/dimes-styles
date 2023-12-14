import Table from './table.handlebars'

export default {
  component: Table,
  title: "Components/Table"
};

export const basic = () => Table({
  inputs: false,
  striped: true
})

export const withInputs = () => Table({
  striped: true,
  inputs: true
})