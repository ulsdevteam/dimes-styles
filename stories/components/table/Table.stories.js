import Table from './table.handlebars'

export default {
  component: Table,
  title: "Components/Table",
  args:{
    striped: false,
  }
};

export const basic = (args) => Table(args)