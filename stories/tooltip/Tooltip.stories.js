import ToolTip from './tooltip.handlebars'

export default {
  component: ToolTip,
  title: "Components/Tooltip",
  parameters:{
    layout: 'centered',
  },
  args:{
    anchorText: 'Tooltip anchor text',
    tooltipText: 'Tooltip text',
    position: 'top',
  }
};

export const basic = (args) => ToolTip(args)