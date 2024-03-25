
/*
*  更改切换主题
*   theme  =  dark light
* */
export function useMethods() {

  let formListRef = ref(null)
  let formColumn = [
    {
      id: 1,
      label: '姓名', // label
      key: 'value1', // 对应的属性名称
      component: 'el-input', // is 绑定的组件名称
      listeners: {
        // 事件
        input: (value) => {
          console.log('事件', value)
        }
      },
      attrs: {
        // 对应的v-bind= attrs
        clearable: true,
        placeholder: '请输入姓名',
        prop: 'value1',
        style: {
          width: '380px'
        },
        rules: [
          {
            required: true,
            message: '请输入姓名',
            trigger: ['blur', 'change']
          }
        ]
      }
    },
    {
      id: 2,
      label: '兴趣',
      key: 'value2',
      component: 'el-select',
      options: [
        {
          label: '篮球',
          value: 1
        },
        {
          label: '排球',
          value: 2
        }
      ],
      listeners: {
        // 事件
        change: (value) => {
          console.log('change事件', value)
        }
      },
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        placeholder: '请选择兴趣',
        prop: 'value2',
        rules: [
          {
            required: true,
            message: '请选择兴趣',
            trigger: ['blur', 'change']
          }
        ]
      }
    },
    {
      id: 3,
      label: '城市',
      key: 'value3',
      component: 'el-checkbox-group',
      style: {
        width: '50%'
      },
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        prop: 'value3',
        rules: [
          {
            type: 'array',
            required: true,
            message: '请选择城市',
            trigger: 'change'
          }
        ]
      },
      children: [
        {
          component: 'el-checkbox',
          label: '北京',
          name: '1'
        },
        {
          component: 'el-checkbox',
          label: '上海',
          name: '2'
        }
      ]
    },
    {
      id: 4,
      label: '性别',
      key: 'value4',
      component: 'el-radio-group',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        prop: 'value4', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }
        ]
      },
      children: [
        {
          component: 'el-radio',
          label: '男'
        },
        {
          component: 'el-radio',
          label: '女'
        }
      ]
    },
    {
      id: 5,
      label: '级联选择器',
      key: 'value5',
      component: 'el-cascader',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        prop: 'value5', // 校验股则 结合 rules 一起用
        options: [
          {
            value: '第一层',
            label: '第一层',
            children: [
              {
                value: '第一层2',
                label: '第一层2',
                children: [
                  {
                    value: '第一层3',
                    label: '第一层3'
                  }
                ]
              },
              {
                value: '第一层22',
                label: '第一层22'
              }
            ]
          },
          {
            value: '第二层',
            label: '第二层',
            children: [
              {
                value: '第二层1',
                label: '第二层1',
                children: [
                  {
                    value: '第二层2',
                    label: '第二层2'
                  },
                  {
                    value: '第二层22',
                    label: '第二层22'
                  }
                ]
              }
            ]
          }
        ],
        rules: [
          {
            required: true,
            message: '请选择级联选择器',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 6,
      label: '时间选择器',
      key: 'value6',
      component: 'el-date-picker',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        type: 'date',
        placeholder: '请输入时间',
        format: 'YYYY/MM/DD',
        prop: 'value6', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选时间选择器',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 7,
      label: '取色器',
      key: 'value7',
      component: 'el-color-picker',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        showAlpha: true,
        prop: 'value7', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选择取色器',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 8,
      label: '数字输入',
      key: 'value8',
      component: 'el-input-number',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        min: 0,
        max: 10,
        prop: 'value8', // 校验股则 结合 rules 一起用
        rules: [
          {
            type: 'number',
            required: true,
            message: '数字输入',
            trigger: ['blur', 'change']
          }
        ]
      }
    },
    {
      id: 9,
      label: 'Rate 评分',
      key: 'value9',
      component: 'el-rate',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        max: 5,
        prop: 'value9', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选择Rate 评分',
            trigger: ['blur', 'change']
          }
        ]
      }
    },
    {
      id: 10,
      label: '滑块',
      key: 'value10',
      component: 'el-slider',
      attrs: {
        style: {
          width: '380px'
        },
        clearable: true,
        min: 10,
        max: 20,
        prop: 'value10', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选择滑块',
            trigger: ['blur', 'change']
          }
        ]
      }
    },
    {
      id: 11,
      label: 'Switch 开关',
      key: 'value11',
      component: 'el-switch',
      attrs: {
        clearable: true,
        style: {
          width: '380px'
        },
        prop: 'value11', // 校验股则 结合 rules 一起用
        rules: [
          {
            required: true,
            message: '请选择Switch 开关',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
    // {
    //   id: 12,
    //   label: '自定义组件',
    //   key: 'value12',
    //   component: HelloWorld, // 引入组件直接放  import HelloWorld from '@components/hello-world/hello-world.vue'
    //   attrs: {
    //     style: {
    //       width: '380px'
    //     }
    //   }
    // }
  ]
  // 数据源
  let formData = ref({
    value1: '',
    value2: '',
    value3: [],
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: 0,
    value9: 3,
    value10: 0,
    value11: true,
    value12: ''
  })


  return {
    formListRef,
    formColumn,
    formData
  }
}