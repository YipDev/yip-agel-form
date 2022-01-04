# Layout 表单布局

`agel-form` 实质上是一个包装组件，在内部包装了 `el-form` 和 `layout` 组件，可以少些写代码罢了。

在复杂的场景下，例如一个表单下有多个分组、块的概念，且样式排版各不同，你可能更需要原始的 `layout` 组件来实现需求。

## 使用


<ClientOnly><layout-form/></ClientOnly>

::: details 点击查看代码
<<< @/docs/.vuepress/components/layout-form.vue
:::


## Layout 

:::tip 
- 每个布局组件都共有的基础属性，插槽，方法
- 各布局组件额外属性的支持情况，请参考 [Props keys](/example/agel-form.html#props-keys)
:::

| 属性           | 类型         | 默认值  | 说明                                 | 
| -------------- | ------------  | ------ | ------------------------------------ | 
| items          | Object/Array  | []     | 表单配置项                | 
| data           | Object/Array  |  -     | 表单数据         | 
| itemExtendKeys | Array         |  -     | 包含在内的属性名不会被注入到组件中

`item` 配置项支持 `component` 组件的动态属性。

`item` 配置项支持 [el-form-item 属性](https://element.eleme.cn/#/zh-CN/component/form#form-item-attributes)。

#### Mehtod

| 属性          | 参数           |  说明                                   | 
| -----------   | ------------  |  ------------------------------------  | 
| getItem       | prop:string，deep:boolean   | 获取指定 item 对象，deep 可获取完整属性  | 
| getRef        | prop:string   |  获取指定组件的 vue 实例  |

#### Slot 

| 属性          |   说明                                   | 
| -----------    |   ------------------------------------  | 
| prepend        |  表单头部追加内容           |
| append         |  表单尾部追加内容                        |
| ......         |  表单项的 prop 具名插槽           |


### AgelFormGrid 

| 属性           | 类型         | 默认值  | 说明                                 | 
| -------------- | ------------  | ------ | ------------------------------------ |
| type           | String        | flex   | 继承自 el-row   | 
| responsive     | Boolean       | false  | 是否响应式布局        | 
| responsiveMethod | Funciton    | -      | 自定义响应式规则      | 
| labelPositionProxy | String    | -      | 表单自适应 labelPosition ，需使用.sync     | 
| ......         | ......        | ...... | [el-row 属性]([el-row](https://element.eleme.cn/#/zh-CN/component/layout#row-attributes))      | 
| ......         | ......        | ...... | [el-col 属性](https://element.eleme.cn/#/zh-CN/component/layout#col-attributes)      | 

`item` 配置项可额外支持 [el-col 属性](https://element.eleme.cn/#/zh-CN/component/layout#col-attributes) 。

#### Mehtod
| 属性          | 参数           |  说明                                   | 
| -----------   | ------------  |  ------------------------------------  | 
| resize        | -             | 手动刷新 自适应  | 


## AgelFormDescriptions 

| 属性           | 类型         | 默认值  | 说明                                 | 
| -------------- | ------------  | ------ | ------------------------------------ | 
| border         | Boolean       | true   | border 样式        | 
| ......         | ......        | ...... | [el-descriptions 属性](https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes)      | 


`item` 配置项可额外支持 [el-descriptions-item 属性](https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes)。

## AgelFormTableditor 

| 属性           | 类型         | 默认值  | 说明                                 | 
| -------------- | ------------  | ------ | ------------------------------------ |
| data           | Array         | -      |  列表数据        |  
| border         | Boolean       | true   | border 样式        | 
| model-prop     | String        | -      | 关联到表单的 prop 名称       | 
| ......         | ......        | ...... | [el-table 属性](https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes)      | 

item 配置项可额外支持 [el-table-column 属性](https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes) 。

#### Mehtod

| 属性          | 参数           |  说明                                   | 
| -----------   | ------------  |  ------------------------------------  | 
| validateRow   | (index,successCallback)             | 对列表某一行的表单进行验证  | 


## TableditorMenuColumn 

编辑菜单列，该组件用于搭配 `tableditor` 布局使用，点击保存时会验证当前行。

| 属性           | 类型         | 默认值  | 说明                                 | 
| -------------- | ------------  | ------ | ------------------------------------ | 
| data           | Array         | -      |  列表数据        |  
| fixed          | String        | right  |  固定        |  
| add            | Boolean       | true   |  显示添加按钮        | 
| edit           | Boolean       | true   |  显示编辑保存按钮        |
| del            | Boolean       | true   |  显示删除按钮        | 
| ......         | ......        | ...... | [el-table-column 属性](https://element.eleme.cn/#/zh-CN/component/descriptions#descriptions-attributes)      |  