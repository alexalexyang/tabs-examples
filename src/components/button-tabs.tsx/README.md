# Button tabs

First, you will need to create a `Tabs` component that will hold the logic for rendering the tab buttons and the corresponding tab panels. You can do this by using a state variable to keep track of the currently selected tab, and using an array of objects to store the data for each tab (e.g. label, content, etc.).

Next, you can use the `Tabs` component in your app by passing in an array of `Tab` objects as the `tabs` prop. Each `Tab` object should have a `label` and a `content` prop. The `label` will be used to render the tab button, and the `content` will be displayed in the tab panel when the tab is selected.

To make the tabbed interface accessible, you can use the `role` and `aria` attributes as shown in the example above. For example, the tab list is given the `role` of `tablist`, and each tab button is given the `role` of `tab`. The currently selected tab has the `aria-selected` attribute set to `true`, while the others are set to `false`. The tab panel has the `role` of `tabpanel`. This allows screen readers to properly interpret the tabbed interface and helps users navigate the tabs.