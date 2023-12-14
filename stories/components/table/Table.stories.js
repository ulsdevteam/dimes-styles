import Table from './table.handlebars'

export default {
  component: Table,
  title: "Components/Table",
  args:{
    striped: true,
  }
};

export const basic = (args) => Table(args)